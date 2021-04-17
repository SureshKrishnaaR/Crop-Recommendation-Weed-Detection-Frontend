import React from "react";
import PredictCropApproach2View from "./predictCropApproach2.view";

const PredictCropApproach2 = ({
  page,
  handlePageChange,
  envfactors,
  location,
  locationval,
  handleLocationChange,
  handleLocationvalChange,
  npkValues,
  handleNpkChange,
}) => {
  return (
    <>
      <PredictCropApproach2View
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
    </>
  );
};

export default PredictCropApproach2;
