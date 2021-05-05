//built in modules
import React from "react";

//components files
import GetSeasonView from "./getSeason.view";

//request imports
import {
  predictCropYield,
  getSeasonbyMonth,
} from "../../../../../../../../utils/requests";

const GetSeason = ({
  page,
  handlePageChange,
  chosenstate,
  locationval,
  crop,
  areaval,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
  allseasons,
  handleSeasonAPI,
  cropyield,
  handleCropYield,
}) => {
  const handlePredictCropYield = () => {
    predictCropYield({
      state: chosenstate,
      district: locationval,
      crop: crop,
      season: seasonval,
      area: areaval,
    })
      .then((res) => {
        handleCropYield(res.yield);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSeasonAutopredict = () => {
    getSeasonbyMonth()
      .then((res) => {
        handleSeasonValChange(res.trim());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <GetSeasonView
        page={page}
        handlePageChange={handlePageChange}
        season={season}
        seasonval={seasonval}
        handleSeasonChange={handleSeasonChange}
        handleSeasonValChange={handleSeasonValChange}
        handleSeasonAPI={handleSeasonAPI}
        allseasons={allseasons}
        cropyield={cropyield}
        handleCropYield={handleCropYield}
        handlePredictCropYield={handlePredictCropYield}
        handleSeasonAutopredict={handleSeasonAutopredict}
      />
    </>
  );
};

export default GetSeason;
