import React from "react";

import ChooseLocationView from "./chooseLocation.view";
import { getWeatherDetails } from "../../../../../../utils/requests";

const ChooseLocation = ({
  page,
  location,
  locationval,
  disablebutton,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
  handleLocationChange,
  handleNpkClick,
  handleEnvFactorsChange,
  handleLocationvalChange,
  handleStatesAPI,
  handleStateChange,
  handleDistrictsAPI,
  allstates,
  alldistricts,
  chosenstate,
  setAllStates,
  setChosenState,

  approach,
}) => {
  const handleWeatherUpdate = () => {
    getWeatherDetails(locationval)
      .then((resp) => {
        handleEnvFactorsChange(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ChooseLocationView
        page={page}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        location={location}
        locationval={locationval}
        disablebutton={disablebutton}
        crop={crop}
        handleCropChange={handleCropChange}
        handleEnvFactorsChange={handleEnvFactorsChange}
        handleLocationChange={handleLocationChange}
        handleLocationvalChange={handleLocationvalChange}
        allstates={allstates}
        alldistricts={alldistricts}
        handleStatesAPI={handleStatesAPI}
        handleDistrictsAPI={handleDistrictsAPI}
        chosenstate={chosenstate}
        handleStateChange={handleStateChange}
        setChosenState={setChosenState}
        approach={approach}
        handleWeatherUpdate={handleWeatherUpdate}
      />
    </>
  );
};

export default ChooseLocation;
