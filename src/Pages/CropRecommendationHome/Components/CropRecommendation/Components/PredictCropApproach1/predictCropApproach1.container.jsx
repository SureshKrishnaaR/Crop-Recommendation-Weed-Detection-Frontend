//built in modules
import React, { useState } from "react";

//component files
import PredictCropView from "./predictCropApproach1.view";

//request imports
import { predictNpk, predictCrop } from "../../../../../../utils/requests";

const PredictCrop = ({
  page,
  handlePageChange,
  envfactors,
  location,
  locationval,
  crop,
  handleCropChange,
  handleEnvFactorsChange,
  handleLocationChange,
  handleLocationvalChange,
  setNpkValues,
  handleProgressChange,
}) => {
  const [showspinner, setShowSpinner] = useState(false);

  const handleNpkClick = () => {
    handlePageChange(4);
    predictNpk(crop, locationval)
      .then((response) => {
        setNpkValues(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePredictCrop = () => {
    predictCrop(locationval)
      .then((response) => {
        console.log(response["crop"]);
        handleCropChange(response["crop"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PredictCropView
        page={page}
        location={location}
        locationval={locationval}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        crop={crop}
        handleCropChange={handleCropChange}
        handleLocationChange={handleLocationChange}
        handleNpkClick={handleNpkClick}
        handleLocationvalChange={handleLocationvalChange}
        showspinner={showspinner}
        setShowSpinner={setShowSpinner}
        handlePredictCrop={handlePredictCrop}
        handleProgressChange={handleProgressChange}
      />
    </>
  );
};

export default PredictCrop;
