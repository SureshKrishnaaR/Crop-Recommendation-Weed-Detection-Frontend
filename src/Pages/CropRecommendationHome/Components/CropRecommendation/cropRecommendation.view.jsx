import React from "react";
import { Button, IconButton, useMediaQuery } from "@material-ui/core";
import { motion } from "framer-motion";
import { useTheme } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import FertilizerQuestion from "./components/FertilizerQuestion";
import ChooseLocation from "./components/ChooseLocation";
import PredictCrop from "./components/PredictCropApproach1";
import NpkPrediction from "./components/PredictCropApproach1/components/NpkPrediction";
import PredictFertilizer from "./components/PredictCropApproach1/components/PredictFertilizer";
import PredictCropApproach2 from "./components/PredictCropApproach2";
import PredictCropYield from "./components/PredictCropYield";

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
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("sm"));
  return (
    <>
      <div
        style={{
          background: "#ffffff",
          backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)",
          height: "calc(100vh - 65px)",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {page !== 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              marginTop: "20px",
              position: "absolute",
              top: "20px",
              left: matches ? "50px" : "40vw",
            }}
          >
            {matches ? (
              <IconButton
                color="primary"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <KeyboardBackspaceIcon
                  onClick={() => {
                    handlePageChange(page - 1);
                  }}
                />
              </IconButton>
            ) : (
              <Button
                color="primary"
                variant="outlined"
                onClick={() => {
                  handlePageChange(page - 1);
                }}
              >
                BACK
              </Button>
            )}
          </motion.div>
        )}
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
        ) : page === 6 ? (
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
            crop={crop}
            handleCropChange={handleCropChange}
          />
        ) : (
          page === 7 && (
            <PredictCropYield
              page={page}
              handlePageChange={handlePageChange}
              chosenstate={chosenstate}
              locationval={locationval}
              crop={crop}
            />
          )
        )}
      </div>
    </>
  );
};

export default CropRecommendationView;
