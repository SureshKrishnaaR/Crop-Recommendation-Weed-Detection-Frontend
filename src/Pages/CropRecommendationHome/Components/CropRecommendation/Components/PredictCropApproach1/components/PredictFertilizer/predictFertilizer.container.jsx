//built in modules
import React from "react";

//component files
import PredictFertilizerView from "./predictFertilizer.view";

//request imports
import { predictFertilizer } from "../../../../../../../../utils/requests";

const PredictFertilizer = ({
  page,
  handlePageChange,
  envfactors,
  crop,
  npkValues,
  fertilizer,
  handleFertilizerChange,
  soiltype,
  soiltypeval,
  handleSoilTypeChange,
  handleSoilTypeValChange,
  allsoiltypes,
  handleSoilTypeAPI,
  locationval,
}) => {
  const handleCropYieldPage = () => {
    handlePageChange(7);
  };

  const handlePredictFertilizer = () => {
    predictFertilizer(
      {
        soil:
          soiltypeval[0].toUpperCase() +
          soiltypeval.slice(1, soiltypeval.length).toLowerCase(),
        crop: crop[0].toUpperCase() + crop.slice(1, crop.length).toLowerCase(),
        ...npkValues,
      },
      locationval
    )
      .then((res) => {
        handleFertilizerChange(res["fertilizer"]);
        console.log(res["fertilizer"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PredictFertilizerView
        page={page}
        handlePageChange={handlePageChange}
        envfactors={envfactors}
        crop={crop}
        npkValues={npkValues}
        fertilizer={fertilizer}
        handleFertilizerChange={handleFertilizerChange}
        soiltype={soiltype}
        soiltypeval={soiltypeval}
        handleSoilTypeChange={handleSoilTypeChange}
        handleSoilTypeValChange={handleSoilTypeValChange}
        allsoiltypes={allsoiltypes}
        handleSoilTypeAPI={handleSoilTypeAPI}
        handlePredictFertilizer={handlePredictFertilizer}
        handleCropYieldPage={handleCropYieldPage}
      />
    </>
  );
};

export default PredictFertilizer;
