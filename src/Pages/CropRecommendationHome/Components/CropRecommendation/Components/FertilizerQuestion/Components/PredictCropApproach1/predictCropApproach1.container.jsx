import React from "react";
import PredictCropView from "./predictCropApproach1.view";

const PredictCrop = ({
  page,
  handlePageChange,
  envfactors,
  location,
  crop,
  handleCropChange,
  handleEnvFactorsChange,
  handleLocationChange,
}) => {
  const handleNpkClick = () => {
    handlePageChange(3);
  };

  return (
    <>
      <PredictCropView
        page={page}
        location={location}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        crop={crop}
        handleCropChange={handleCropChange}
        handleLocationChange={handleLocationChange}
        handleNpkClick={handleNpkClick}
      />
    </>
  );
};

export default PredictCrop;
