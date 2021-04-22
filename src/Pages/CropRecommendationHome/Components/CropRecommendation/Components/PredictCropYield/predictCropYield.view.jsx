import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import GetArea from "./components/getArea";
import GetSeason from "./components/getSeason";

const PredictCropYieldView = ({
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
        ) : page === 8 ? (
          <>
            <GetSeason
              page={page}
              handlePageChange={handlePageChange}
              chosenstate={chosenstate}
              locationval={locationval}
              crop={crop}
              areaval={areaval}
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
        ) : (
          page === 9 && (
            <>
              <Grid
                container
                justify="center"
                style={{ width: "90vw", marginTop: "10px" }}
              >
                <Grid item xs={12} md={6} lg={4}>
                  <Typography
                    style={{
                      boxShadow:
                        "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                      margin: "10px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography> NITROGEN </Typography>
                    <CountUp
                      end={npkValues.nitrogen}
                      duration={5}
                      decimals={4}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Typography
                    style={{
                      boxShadow:
                        "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                      margin: "10px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography> PHOSPHORUS </Typography>
                    <CountUp
                      end={npkValues.phosphorus}
                      duration={5}
                      decimals={4}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Typography
                    style={{
                      boxShadow:
                        "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                      margin: "10px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography> POTASSIUM </Typography>
                    <CountUp
                      end={npkValues.potassium}
                      duration={5}
                      decimals={4}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Typography
                    style={{
                      boxShadow:
                        "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                      margin: "10px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography> CROP </Typography>
                    <Typography> {crop.toUpperCase()} </Typography>
                  </Typography>
                </Grid>
                {fertilizer && (
                  <Grid item xs={12} md={6} lg={4}>
                    <Typography
                      style={{
                        boxShadow:
                          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                        margin: "10px",
                        padding: "15px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography> FERTILIZER </Typography>
                      <Typography> {fertilizer} </Typography>
                    </Typography>
                  </Grid>
                )}

                <Grid item xs={12} md={6} lg={4}>
                  <Typography
                    style={{
                      boxShadow:
                        "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                      margin: "10px",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography> CROP YIELD </Typography>
                    <CountUp end={cropyield} duration={5} decimals={4} />
                  </Typography>
                </Grid>
              </Grid>
            </>
          )
        )}
      </div>
    </>
  );
};

export default PredictCropYieldView;
