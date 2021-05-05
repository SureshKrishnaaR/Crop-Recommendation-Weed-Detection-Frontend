//built in modules
import React from "react";
import { motion } from "framer-motion";
import { Button, IconButton, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

//component files
import GuideMap from "./Components/GuideMap";
import GuideMapModal from "./Components/GuideMapModal";
import FertilizerQuestion from "./Components/FertilizerQuestion";
import ChooseLocation from "./Components/ChooseLocation";
import PredictCrop from "./Components/PredictCropApproach1";
import NpkPrediction from "./Components/PredictCropApproach1/components/NpkPrediction";
import PredictFertilizer from "./Components/PredictCropApproach1/components/PredictFertilizer";
import PredictCropApproach2 from "./Components/PredictCropApproach2";
import PredictCropYield from "./Components/PredictCropYield";

const CropRecommendationView = ({
  page,
  handlePageChange,
  envfactors,
  location,
  locationval,
  disablebutton,
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
  area,
  handleAreaChange,
  areaval,
  handleAreaValChange,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
  allseasons,
  handleSeasonAPI,
  cropyield,
  handleCropYield,
  progress,
  handleProgressChange,
  openGuideMapModal,
  handleOpenGuideMapModal,
  handleCloseGuideMapModal,
}) => {
  const mediatheme2 = useTheme();
  const matchforxl = useMediaQuery(mediatheme2.breakpoints.up("lg"));

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
          <>
            {matchforxl ? (
              <GuideMap progress={progress} approach={approach} />
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    marginTop: "0px",
                    position: "absolute",
                    top: "20px",
                    right: "30px",
                  }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleOpenGuideMapModal}
                  >
                    GUIDE MAP
                  </Button>
                </motion.div>
                <GuideMapModal
                  openGuideMapModal={openGuideMapModal}
                  handleOpenGuideMapModal={handleOpenGuideMapModal}
                  handleCloseGuideMapModal={handleCloseGuideMapModal}
                  progress={progress}
                  approach={approach}
                ></GuideMapModal>
              </>
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                marginTop: "0px",
                position: "absolute",
                top: "20px",
                left: "20px",
              }}
            >
              <IconButton
                color="primary"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
                onClick={() => {
                  if (page === 6) {
                    handlePageChange(2);
                    handleProgressChange(0);
                  } else if (page === 7) {
                    if (approach === 1) {
                      handlePageChange(5);
                      handleProgressChange(3);
                    } else if (approach === 2) {
                      handlePageChange(6);
                      handleProgressChange(1);
                    }
                  } else {
                    handlePageChange(page - 1);
                    handleProgressChange(progress - 1);
                  }
                }}
              >
                <KeyboardBackspaceIcon />
              </IconButton>
            </motion.div>
          </>
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
            disablebutton={disablebutton}
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
            handleProgressChange={handleProgressChange}
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
            handleProgressChange={handleProgressChange}
          />
        ) : (
          page >= 7 && (
            <PredictCropYield
              page={page}
              handlePageChange={handlePageChange}
              approach={approach}
              chosenstate={chosenstate}
              locationval={locationval}
              crop={crop}
              fertilizer={fertilizer}
              npkValues={npkValues}
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
              handleProgressChange={handleProgressChange}
            />
          )
        )}
      </div>
    </>
  );
};

export default CropRecommendationView;
