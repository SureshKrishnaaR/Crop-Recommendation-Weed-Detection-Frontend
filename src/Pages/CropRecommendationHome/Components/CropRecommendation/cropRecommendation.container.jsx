import axios from "axios";
import React, { useState } from "react";

import CropRecommendationView from "./cropRecommendation.view";
import { getStates, getDistricts, getSoil } from "../../../../utils/requests";

const CropRecommendation = () => {
  /*
    States
  */

  //page state
  const [page, setPage] = useState(1);

  //crop recommendation approach
  const [approach, setApproach] = useState(-1);

  //states for choose location
  const [location, setLocation] = useState(-1);
  const [locationval, setLocationval] = useState("");
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

  /*
    Handlers
  */

  //page handlers
  const handlePageChange = (page) => {
    setPage(page);
  };

  //approach handlers
  const handleApproachChange = (appval) => {
    setApproach(appval);
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

  const handleLocationChange = (val) => {
    setAllDistricts([]);
    setLocationval("");
    setLocation(val);
    console.log("hello", val);
    if (val === 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          axios.get(
            "http://maps.googleapis.com/maps/api/geocode/json?latlng=" +
              position.coords.latitude +
              "," +
              position.coords.longitude +
              "&sensor=false",
            function (data) {
              console.log(data);
            }
          );
        });
        handleLocationvalChangeType2("Mumbai");
      }
    } else if (val === 1) {
      handleLocationvalChangeType2("Chennai");
    }
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
    if (soiltypetobeset === 0) setSoilTypeVal("Red");
    setSoilType(soiltypetobeset);
  };

  const handleSoilTypeValChange = (event) => {
    setSoilTypeVal(event.target.value);
  };

  const [allsoiltypes, setAllSoilTypes] = useState([]);

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

  return (
    <>
      <CropRecommendationView
        page={page}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        location={location}
        locationval={locationval}
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
      />
    </>
  );
};

export default CropRecommendation;
