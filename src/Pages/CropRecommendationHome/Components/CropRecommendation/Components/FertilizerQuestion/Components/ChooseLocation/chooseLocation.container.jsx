import React from "react";
import ChooseLocationView from "./chooseLocation.view";

const ChooseLocation = ({
  page,
  location,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
  handleLocationChange,
  handleNpkClick,
  handleEnvFactorsChange,
}) => {
  return (
    <>
      <ChooseLocationView
        page={page}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        location={location}
        crop={crop}
        handleCropChange={handleCropChange}
        handleEnvFactorsChange={handleEnvFactorsChange}
        handleLocationChange={handleLocationChange}
      />
    </>
  );
};

export default ChooseLocation;
