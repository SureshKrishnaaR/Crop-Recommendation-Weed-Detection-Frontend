import React from "react";
import PredictCropYieldView from "./predictCropYield.view";

const PredictCropYield = ({
  page,
  handlePageChange,
  chosenstate,
  locationval,
  crop,
  area,
  handleAreaChange,
  areaval,
  handleAreaValChange,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
}) => {
  return (
    <>
      <PredictCropYieldView
        page={page}
        handlePageChange={handlePageChange}
        chosenstate={chosenstate}
        locationval={locationval}
        crop={crop}
        area={area}
        handleAreaChange={handleAreaChange}
        areaval={areaval}
        handleAreaValChange={handleAreaValChange}
        season={season}
        seasonval={seasonval}
        handleSeasonChange={handleSeasonChange}
        handleSeasonValChange={handleSeasonValChange}
      />
    </>
  );
};

export default PredictCropYield;
