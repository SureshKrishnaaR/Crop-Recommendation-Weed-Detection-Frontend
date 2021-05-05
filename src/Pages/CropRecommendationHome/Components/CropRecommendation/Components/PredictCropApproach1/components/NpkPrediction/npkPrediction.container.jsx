//built in modules
import React from "react";

//component files
import NpkPredictionView from "./npkPrediction.view";

const NpkPrediction = ({
  page,
  handlePageChange,
  envfactors,
  crop,
  npkValues,
  handleNpkChange,
}) => {
  return (
    <>
      <NpkPredictionView
        page={page}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        crop={crop}
        npkValues={npkValues}
        handleNpkChange={handleNpkChange}
      />
    </>
  );
};

export default NpkPrediction;
