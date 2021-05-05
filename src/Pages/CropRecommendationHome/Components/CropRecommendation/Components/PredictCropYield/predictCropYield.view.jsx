//built in modules
import React from "react";
import { useHistory } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Typography, Grid, Button, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import ReplayIcon from "@material-ui/icons/Replay";

//component files
import GetArea from "./components/getArea";
import GetSeason from "./components/getSeason";

const PredictCropYieldView = ({
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
  const history = useHistory();
  const themealldata = useTheme();
  const matches = useMediaQuery(themealldata.breakpoints.up("md"));
  const matchesforlg = useMediaQuery(themealldata.breakpoints.up("lg"));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: matchesforlg ? "80%" : "100%",
          width: "100vw",
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: !matches && "60px",
                  flexDirection: approach === 2 && "column",
                }}
              >
                <Grid item xs={12} md={6} lg={4} style={{ width: "100%" }}>
                  <motion.div
                    initial={{ x: "-100vw", y: "-100vh", opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
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
                      <Typography>
                        <CountUp
                          end={npkValues.nitrogen}
                          duration={5}
                          decimals={4}
                        />
                        {" ppm"}
                      </Typography>
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6} lg={4} style={{ width: "100%" }}>
                  <motion.div
                    initial={{ y: "-100vw", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
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
                      <Typography>
                        <CountUp
                          end={npkValues.phosphorus}
                          duration={5}
                          decimals={4}
                        />
                        {" ppm"}
                      </Typography>
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6} lg={4} style={{ width: "100%" }}>
                  <motion.div
                    initial={{ x: "100vw", y: "-100vh", opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
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
                      <Typography>
                        <CountUp
                          end={npkValues.potassium}
                          duration={5}
                          decimals={4}
                        />
                        {" ppm"}
                      </Typography>
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6} lg={4} style={{ width: "100%" }}>
                  <motion.div
                    initial={{ x: "-100vw", y: "100vh", opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
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
                  </motion.div>
                </Grid>
                {fertilizer && (
                  <Grid item xs={12} md={6} lg={4} style={{ width: "100%" }}>
                    <motion.div
                      initial={{ y: "100vh", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.2 }}
                    >
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
                    </motion.div>
                  </Grid>
                )}

                <Grid item xs={12} md={6} lg={4} style={{ width: "100%" }}>
                  <motion.div
                    initial={{ x: "100vw", y: "100vh", opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
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
                      <Typography>
                        <CountUp end={cropyield} duration={5} decimals={4} />
                        {" kg"}
                      </Typography>
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid container item xs={12} justify="center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 5 }}
                    whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ margin: "10px" }}
                      startIcon={<HomeIcon />}
                      onClick={() => {
                        history.push("/home");
                      }}
                    >
                      BACK TO HOME
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 5 }}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        yoyo: Infinity,
                      },
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ margin: "10px" }}
                      endIcon={<ReplayIcon />}
                      onClick={() => {
                        handlePageChange(1);
                        handleProgressChange(-1);
                      }}
                    >
                      RESTART
                    </Button>
                  </motion.div>
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
