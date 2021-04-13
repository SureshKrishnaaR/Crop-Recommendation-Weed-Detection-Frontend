import React from "react";

import FertilizerQuestion from "./components/FertilizerQuestion";
import PredictCrop from "./components/FertilizerQuestion/components/PredictCropApproach1";
import NpkPrediction from "./components/FertilizerQuestion/components/PredictCropApproach1/components/NPKPrediction";

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
        ) : (
          page === 3 && (
            <NpkPrediction
              page={page}
              handlePageChange={handlePageChange}
              envfactors={envfactors}
              crop={crop}
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
