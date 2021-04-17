import React from "react";

import FertilizerQuestion from "./components/FertilizerQuestion";
import ChooseLocation from "./components/ChooseLocation";
import PredictCrop from "./components/PredictCropApproach1";
import NpkPrediction from "./components/PredictCropApproach1/components/NpkPrediction";
import PredictFertilizer from "./components/PredictCropApproach1/components/PredictFertilizer";
import PredictCropApproach2 from "./components/PredictCropApproach2";

const CropRecommendationView = ({
  page,
  handlePageChange,
  envfactors,
  location,
  locationval,
  soiltype,
  soiltypeval,
  crop,
  handleCropChange,
  handleEnvFactorsChange,
  handleLocationChange,
  npkValues,
  setNpkValues,
  handleNpkChange,
  fertilizer,
  handleFertilizerChange,
  handleLocationvalChange,
  handleSoilTypeChange,
  handleSoilTypeValChange,
  handleStatesAPI,
  handleStateChange,
  handleDistrictsAPI,
  allstates,
  alldistricts,
  chosenstate,
  setAllStates,
  setChosenState,
  allsoiltypes,
  handleSoilTypeAPI,
  approach,
  handleApproachChange,
}) => {
  return (
    <>
      <div
        style={{
          background: "#ffffff",
          backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)",
          height: "calc(100vh - 65px)",
        }}
      >
        {page === 1 ? (
          <FertilizerQuestion
            page={page}
            handlePageChange={handlePageChange}
            approach={approach}
            handleApproachChange={handleApproachChange}
          />
        ) : page === 2 ? (
          <ChooseLocation
            page={page}
            handlePageChange={handlePageChange}
            envfactors={envfactors}
            location={location}
            locationval={locationval}
            crop={crop}
            handleCropChange={handleCropChange}
            handleEnvFactorsChange={handleEnvFactorsChange}
            handleLocationChange={handleLocationChange}
            handleLocationvalChange={handleLocationvalChange}
            handleStatesAPI={handleStatesAPI}
            handleStateChange={handleStateChange}
            handleDistrictsAPI={handleDistrictsAPI}
            allstates={allstates}
            alldistricts={alldistricts}
            chosenstate={chosenstate}
            setAllStates={setAllStates}
            setChosenState={setChosenState}
            approach={approach}
          />
        ) : page === 3 ? (
          <PredictCrop
            page={page}
            handlePageChange={handlePageChange}
            envfactors={envfactors}
            location={location}
            locationval={locationval}
            crop={crop}
            handleCropChange={handleCropChange}
            handleEnvFactorsChange={handleEnvFactorsChange}
            handleLocationChange={handleLocationChange}
            handleLocationvalChange={handleLocationvalChange}
            setNpkValues={setNpkValues}
          />
        ) : page === 4 ? (
          <NpkPrediction
            page={page}
            handlePageChange={handlePageChange}
            envfactors={envfactors}
            crop={crop}
            npkValues={npkValues}
            handleNpkChange={handleNpkChange}
          />
        ) : page === 5 ? (
          <PredictFertilizer
            page={page}
            handlePageChange={handlePageChange}
            envfactors={envfactors}
            crop={crop}
            npkValues={npkValues}
            fertilizer={fertilizer}
            handleFertilizerChange={handleFertilizerChange}
            soiltype={soiltype}
            soiltypeval={soiltypeval}
            handleSoilTypeChange={handleSoilTypeChange}
            handleSoilTypeValChange={handleSoilTypeValChange}
            allsoiltypes={allsoiltypes}
            handleSoilTypeAPI={handleSoilTypeAPI}
            locationval={locationval}
          />
        ) : (
          page === 6 && (
            <PredictCropApproach2
              page={page}
              handlePageChange={handlePageChange}
              envfactors={envfactors}
              location={location}
              locationval={locationval}
              handleLocationChange={handleLocationChange}
              handleLocationvalChange={handleLocationvalChange}
              npkValues={npkValues}
              handleNpkChange={handleNpkChange}
            />
          )
        )}
      </div>
    </>
  );
};

export default CropRecommendationView;
