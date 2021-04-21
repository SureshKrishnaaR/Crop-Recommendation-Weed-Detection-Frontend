import React, { useState } from "react";
import GetSeasonView from "./getSeason.view";
import { getSeasons } from "../../../../../../../../utils/requests";

const GetSeason = ({
  page,
  handlePageChange,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
}) => {
  const [allseasons, setAllSeasons] = useState([]);

  const handleSeasonAPI = () => {
    getSeasons()
      .then((res) => {
        let seasonsapi = [];
        for (let i in res) {
          seasonsapi.push(res[i].trim());
        }
        setAllSeasons(seasonsapi);
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
      />
    </>
  );
};

export default GetSeason;
