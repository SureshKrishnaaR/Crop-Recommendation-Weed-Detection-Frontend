import React from "react";
import PredictCropYieldView from "./predictCropYield.view";

const PredictCropYield = ({
  page,
  handlePageChange,
  chosenstate,
  locationval,
  crop,
  fertilizer,
  npkValues,
  area,
  handleAreaChange,
  areaval,
  handleAreaValChange,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
  allseasons,
  handleSeasonAPI,
  cropyield,
  handleCropYield,
}) => {
  return (
    <>
      <PredictCropYieldView
        page={page}
        handlePageChange={handlePageChange}
        chosenstate={chosenstate}
        locationval={locationval}
        crop={crop}
        fertilizer={fertilizer}
        npkValues={npkValues}
        area={area}
        handleAreaChange={handleAreaChange}
        areaval={areaval}
        handleAreaValChange={handleAreaValChange}
        season={season}
        seasonval={seasonval}
        handleSeasonChange={handleSeasonChange}
        handleSeasonValChange={handleSeasonValChange}
        allseasons={allseasons}
        handleSeasonAPI={handleSeasonAPI}
        cropyield={cropyield}
        handleCropYield={handleCropYield}
      />
    </>
  );
};

export default PredictCropYield;
