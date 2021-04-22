import React from "react";
import GetSeasonView from "./getSeason.view";

const GetSeason = ({
  page,
  handlePageChange,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
  allseasons,
  handleSeasonAPI,
}) => {
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
      />
    </>
  );
};

export default GetSeason;
