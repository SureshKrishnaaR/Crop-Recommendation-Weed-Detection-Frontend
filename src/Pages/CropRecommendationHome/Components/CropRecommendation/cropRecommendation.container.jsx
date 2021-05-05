//built in modules
import React, { useState } from "react";
import axios from "axios";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

//component files
import CropRecommendationView from "./cropRecommendation.view";

//redux imports
import { addFailureAlert } from "../../../../redux/ActionCreators/alert.action";

//requests imports
import {
  getStates,
  getDistricts,
  getSoil,
  getSeasons,
} from "../../../../utils/requests";

const CropRecommendation = () => {
  const dispatch = useDispatch();

  /*
    States
  */

  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  //page states
  const [page, setPage] = useState(1);

  //progress states
  const [progress, setProgress] = useState(-1);

  //modal states
  const [openGuideMapModal, setOpenGuideMapModal] = useState(false);

  //crop recommendation approach
  const [approach, setApproach] = useState(-1);

  //states for choose location
  const [location, setLocation] = useState(-1);
  const [locationval, setLocationval] = useState("");
  const [disablebutton, setDisableButton] = useState(false);
  const [allstates, setAllStates] = useState([]);
  const [alldistricts, setAllDistricts] = useState([]);
  const [chosenstate, setChosenState] = useState(null);
  const [envfactors, setEnvFactors] = useState({
    rainfall: null,
    temperature: null,
    humidity: null,
  });

  //states for predict crop
  const [crop, setCrop] = useState(null);

  //states for npk prediction
  const [npkValues, setNpkValues] = useState({
    nitrogen: null,
    phosphorus: null,
    potassium: null,
  });

  //states for fertilizer
  const [fertilizer, setFertilizer] = useState(null);
  const [soiltype, setSoilType] = useState(-1);
  const [soiltypeval, setSoilTypeVal] = useState("");

  //states for crop production
  const [area, setArea] = useState(-1);
  const [areaval, setAreaVal] = useState(null);
  const [season, setSeason] = useState(-1);
  const [seasonval, setSeasonVal] = useState(null);
  const [allseasons, setAllSeasons] = useState([]);
  const [allsoiltypes, setAllSoilTypes] = useState([]);
  const [cropyield, setCropYield] = useState(null);

  /*
    Handlers
  */

  //page handlers
  const handlePageChange = (pg) => {
    console.log(pg);
    if (pg > page) {
      handleProgressChange(progress + 1);
    }
    setPage(pg);
  };

  //progress handlers
  const handleProgressChange = (prog) => {
    setProgress(prog);
  };

  //modal handlers
  const handleOpenGuideMapModal = () => {
    setOpenGuideMapModal(true);
  };

  const handleCloseGuideMapModal = () => {
    setOpenGuideMapModal(false);
  };

  //approach handlers
  const handleApproachChange = (appval) => {
    if (appval !== approach) {
      setArea(null);
      setAreaVal(null);
      setChosenState(null);
      setCrop(null);
      setEnvFactors({
        rainfall: null,
        temperature: null,
        humidity: null,
      });
      setFertilizer(null);
      setLocation(null);
      setLocationval(null);
      setNpkValues({
        nitrogen: null,
        phosphorus: null,
        potassium: null,
      });
      setSeason(null);
      setSeasonVal(null);
      setSoilType(null);
      setSoilTypeVal(null);
      setApproach(appval);
    }
  };

  //handlers for choose location

  const handleEnvFactorsChange = (newenvfactors) => {
    setEnvFactors(newenvfactors);
  };

  const handleLocationvalChange = (event) => {
    setLocationval(event.target.value);
    setCrop(null);
  };

  const handleLocationvalChangeType2 = (loc) => {
    setLocationval(loc);
    setCrop(null);
  };

  const handleCheckValidity = (state, district) => {
    getDistricts(state)
      .then((res) => {
        var t = 0;
        for (let i in res.data) {
          if (res.data[i] === district.toUpperCase()) {
            t = 1;
            break;
          }
        }
        setChosenState(state);
        handleLocationvalChangeType2(district);
        if (t === 0) {
          setDisableButton(true);
          dispatch(addFailureAlert("You cannot choose this district"));
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const handleLocationChange = (val) => {
    setAllDistricts([]);
    setDisableButton(false);
    setLocationval("");
    if (val === 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          //districts API
          axios
            .get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${10.79}&longitude=${78.7}&localityLanguage=en`
            )
            .then((res) => {
              console.log(res);
              let district =
                res["data"]["localityInfo"]["administrative"][2]["name"];
              let state =
                res["data"]["localityInfo"]["administrative"][1]["name"];
              console.log(district, state);
              if (district.includes("district")) {
                district = district.slice(0, district.length - 9);
              }
              handleCheckValidity(state, district);
            })
            .catch((err) => {
              alert("Error...!");
              setLocation(null);
            });
        });
      }
    } else if (val === 1) {
      //Redux - from profile
      setChosenState(userDetails["state_name"]);
      handleLocationvalChangeType2(userDetails["district_name"]);
    }
    setLocation(val);
  };

  const handleStatesAPI = () => {
    getStates()
      .then((res) => {
        let resp = [];
        for (let i in res.data) {
          resp.push(res.data[i]);
        }
        setAllStates(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDistrictsAPI = (stateval) => {
    getDistricts(stateval)
      .then((res) => {
        let resp = [];
        for (let i in res.data) {
          resp.push(res.data[i]);
        }
        setAllDistricts(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStateChange = (event) => {
    setChosenState(event.target.value);
    handleDistrictsAPI(event.target.value);
  };

  //handlers for predict crop

  const handleCropChange = (predictedCrop) => {
    setCrop(predictedCrop);
  };

  //handlers for predict npk
  const handleNpkChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setNpkValues({ ...npkValues, [name]: value });
  };

  //handlers for predict fertilizer

  const handleFertilizerChange = (predictedFertilizer) => {
    setFertilizer(predictedFertilizer);
  };

  const handleSoilTypeChange = (soiltypetobeset) => {
    setSoilTypeVal("");
    setFertilizer(null);
    if (soiltypetobeset === 0) {
      //Redux - from profile
      setSoilTypeVal(userDetails["soil_type"]);
    }
    setSoilType(soiltypetobeset);
  };

  const handleSoilTypeValChange = (event) => {
    setFertilizer(null);
    setSoilTypeVal(event.target.value);
  };

  const handleSoilTypeAPI = () => {
    getSoil()
      .then((res) => {
        let resp = [];
        for (let i in res.data) {
          resp.push(res.data[i].toUpperCase());
        }
        setAllSoilTypes(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //handlers for Crop Production

  const handleAreaChange = (newareaval) => {
    setAreaVal(null);
    if (newareaval === 0) {
      //Redux - from profile
      setAreaVal(userDetails["area"]);
    }
    setArea(newareaval);
  };

  const handleAreaValChange = (event) => {
    setAreaVal(event.target.value);
  };

  const handleSeasonChange = (seasonvalue) => {
    setSeasonVal("");
    setCropYield(null);
    if (seasonvalue === 0) {
      //Redux - from profile
      setSeasonVal("Summer");
    }
    setSeason(seasonvalue);
  };

  const handleSeasonValChange = (event) => {
    setCropYield(null);
    setSeasonVal(event.target.value);
  };

  const handleSeasonAPI = () => {
    getSeasons()
      .then((res) => {
        let seasonsapi = [];
        for (let i in res) {
          seasonsapi.push(res[i].trim());
        }
        setAllSeasons(seasonsapi);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCropYield = (yieldval) => {
    setCropYield(yieldval);
  };

  return (
    <>
      <CropRecommendationView
        page={page}
        handlePageChange={handlePageChange}
        progress={progress}
        handleProgressChange={handleProgressChange}
        openGuideMapModal={openGuideMapModal}
        handleOpenGuideMapModal={handleOpenGuideMapModal}
        handleCloseGuideMapModal={handleCloseGuideMapModal}
        envfactors={envfactors}
        location={location}
        locationval={locationval}
        disablebutton={disablebutton}
        soiltype={soiltype}
        soiltypeval={soiltypeval}
        crop={crop}
        handleCropChange={handleCropChange}
        handleEnvFactorsChange={handleEnvFactorsChange}
        handleLocationChange={handleLocationChange}
        npkValues={npkValues}
        setNpkValues={setNpkValues}
        handleNpkChange={handleNpkChange}
        fertilizer={fertilizer}
        handleFertilizerChange={handleFertilizerChange}
        handleLocationvalChange={handleLocationvalChange}
        handleSoilTypeChange={handleSoilTypeChange}
        handleSoilTypeValChange={handleSoilTypeValChange}
        handleStatesAPI={handleStatesAPI}
        handleStateChange={handleStateChange}
        handleDistrictsAPI={handleDistrictsAPI}
        allstates={allstates}
        alldistricts={alldistricts}
        chosenstate={chosenstate}
        setAllStates={setAllStates}
        setChosenState={setChosenState}
        allsoiltypes={allsoiltypes}
        handleSoilTypeAPI={handleSoilTypeAPI}
        approach={approach}
        handleApproachChange={handleApproachChange}
        area={area}
        handleAreaChange={handleAreaChange}
        areaval={areaval}
        handleAreaValChange={handleAreaValChange}
        season={season}
        seasonval={seasonval}
        handleSeasonChange={handleSeasonChange}
        handleSeasonValChange={handleSeasonValChange}
        allseasons={allseasons}
        handleSeasonAPI={handleSeasonAPI}
        cropyield={cropyield}
        handleCropYield={handleCropYield}
      />
    </>
  );
};

export default CropRecommendation;
