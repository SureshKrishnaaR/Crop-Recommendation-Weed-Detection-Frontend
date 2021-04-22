import React from "react";
import GetArea from "./components/getArea";
import GetSeason from "./components/getSeason";

const PredictCropYieldView = ({
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
  allseasons,
  handleSeasonAPI,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {page === 7 ? (
          <GetArea
            page={page}
            handlePageChange={handlePageChange}
            area={area}
            handleAreaChange={handleAreaChange}
            areaval={areaval}
            handleAreaValChange={handleAreaValChange}
          />
        ) : (
          page === 8 && (
            <>
              <GetSeason
                page={page}
                handlePageChange={handlePageChange}
                season={season}
                seasonval={seasonval}
                handleSeasonChange={handleSeasonChange}
                handleSeasonValChange={handleSeasonValChange}
                allseasons={allseasons}
                handleSeasonAPI={handleSeasonAPI}
              />
            </>
          )
        )}
      </div>
    </>
  );
};

export default PredictCropYieldView;
