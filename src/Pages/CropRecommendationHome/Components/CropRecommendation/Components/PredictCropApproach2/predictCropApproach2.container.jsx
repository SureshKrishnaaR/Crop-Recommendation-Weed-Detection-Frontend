import React, { useState } from "react";
import PredictCropApproach2View from "./predictCropApproach2.view";
import { predictCropApp2 } from "../../../../../../utils/requests";

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
  crop,
  handleCropChange,
  handleProgressChange,
}) => {
  const [spin, setSpin] = useState(false);

  const handlePredictCropApproach2 = () => {
    predictCropApp2({ ...npkValues }, locationval)
      .then((response) => {
        handleCropChange(response["crop"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        handlePredictCropApproach2={handlePredictCropApproach2}
        crop={crop}
        spin={spin}
        setSpin={setSpin}
        handleProgressChange={handleProgressChange}
      />
    </>
  );
};

export default PredictCropApproach2;
