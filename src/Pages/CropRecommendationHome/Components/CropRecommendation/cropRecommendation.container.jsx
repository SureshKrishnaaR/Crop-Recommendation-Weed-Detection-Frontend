import React, { useState } from "react";
import CropRecommendationView from "./cropRecommendation.view";

const CropRecommendation = () => {
  const [page, setPage] = useState(1);
  const [envfactors, setEnvFactors] = useState({
    rainfall: null,
    temperature: null,
    humidity: null,
  });

  const [npkValues, setNpkValues] = useState({
    nitrogen: 92.2,
    phosporous: 393.2,
    potassium: 48.3,
  });

  const [location, setLocation] = useState(null);

  const [crop, setCrop] = useState(null);

  const handleEnvFactorsChange = (newenvfactors) => {
    setEnvFactors(newenvfactors);
  };

  const handleCropChange = (predictedCrop) => {
    setCrop(predictedCrop);
  };

  const handleLocationChange = () => {
    let newenvfactors = {
      rainfall: 103.38,
      temperature: 200.94,
      humidity: 67.15,
    };
    handleEnvFactorsChange(newenvfactors);
    setLocation("CHENNAI");
  };

  const handleNpkChange = (newNpkvalues) => {
    setNpkValues(newNpkvalues);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <CropRecommendationView
        page={page}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        location={location}
        crop={crop}
        handleCropChange={handleCropChange}
        handleEnvFactorsChange={handleEnvFactorsChange}
        handleLocationChange={handleLocationChange}
        npkValues={npkValues}
        handleNpkChange={handleNpkChange}
      />
    </>
  );
};

export default CropRecommendation;
