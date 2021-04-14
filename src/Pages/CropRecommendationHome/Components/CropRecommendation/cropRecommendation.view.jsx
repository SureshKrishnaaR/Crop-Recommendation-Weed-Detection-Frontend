import React from "react";

import FertilizerQuestion from "./components/FertilizerQuestion";
import ChooseLocation from "./components/FertilizerQuestion/components/ChooseLocation";
import PredictCrop from "./components/FertilizerQuestion/components/ChooseLocation/components/PredictCropApproach1";
import NpkPrediction from "./components/FertilizerQuestion/components/ChooseLocation/components/PredictCropApproach1/components/NPKPrediction";
import PredictFertilizer from "./components/FertilizerQuestion/components/ChooseLocation/components/PredictCropApproach1/components/NPKPrediction/components/PredictFertilizer";

const CropRecommendationView = ({
  page,
  handlePageChange,
  envfactors,
  location,
  crop,
  handleCropChange,
  handleEnvFactorsChange,
  handleLocationChange,
  npkValues,
  handleNpkChange,
  fertilizer,
  handleFertilizerChange,
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
          <FertilizerQuestion page={page} handlePageChange={handlePageChange} />
        ) : page === 2 ? (
          <ChooseLocation
            page={page}
            handlePageChange={handlePageChange}
            envfactors={envfactors}
            location={location}
            crop={crop}
            handleCropChange={handleCropChange}
            handleEnvFactorsChange={handleEnvFactorsChange}
            handleLocationChange={handleLocationChange}
          />
        ) : page === 3 ? (
          <PredictCrop
            page={page}
            handlePageChange={handlePageChange}
            envfactors={envfactors}
            location={location}
            crop={crop}
            handleCropChange={handleCropChange}
            handleEnvFactorsChange={handleEnvFactorsChange}
            handleLocationChange={handleLocationChange}
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
        ) : (
          page === 5 && (
            <PredictFertilizer
              page={page}
              handlePageChange={handlePageChange}
              envfactors={envfactors}
              crop={crop}
              npkValues={npkValues}
              fertilizer={fertilizer}
              handleFertilizerChange={handleFertilizerChange}
            />
          )
        )}
      </div>
    </>
  );
};

export default CropRecommendationView;
