//built in modules
import React from "react";

//component files
import PredictCropYieldView from "./predictCropYield.view";

const PredictCropYield = ({
  page,
  handlePageChange,
  approach,
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
  handleProgressChange,
}) => {
  return (
    <>
      <PredictCropYieldView
        page={page}
        handlePageChange={handlePageChange}
        approach={approach}
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
        handleProgressChange={handleProgressChange}
      />
    </>
  );
};

export default PredictCropYield;
