import React from "react";
import GetSeasonView from "./getSeason.view";
import { predictCropYield } from "../../../../../../../../utils/requests";

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
      />
    </>
  );
};

export default GetSeason;
