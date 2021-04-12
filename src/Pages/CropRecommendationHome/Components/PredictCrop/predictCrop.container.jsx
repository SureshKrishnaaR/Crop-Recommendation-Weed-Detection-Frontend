import React, { useState } from "react";
import PredictCropView from "./predictCrop.view";

const PredictCrop = ({ page, handlePageChange }) => {
  const [envfactors, setEnvFactors] = useState({
    rainfall: null,
    temperature: null,
    humidity: null,
  });

  const [crop, setCrop] = useState(null);

  const handleEnvFactorsChange = () => {};

  const handleCropChange = (predictedCrop) => {
    setCrop(predictedCrop);
  };

  return (
    <>
      <PredictCropView
        page={page}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        crop={crop}
        handleCropChange={handleCropChange}
      />
    </>
  );
};

export default PredictCrop;
