import React from "react";
import { Typography, Button, Box, CircularProgress } from "@material-ui/core";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const PredictCropView = ({
  page,
  location,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
  handleLocationChange,
  handleNpkClick,
}) => {
  return (
    <>
      {location && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "30px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
              width: "300px",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
              height: "10%",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>LOCATION</Typography>
              <Typography style={{ textAlign: "right" }}>{location}</Typography>
            </div>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleLocationChange}
              >
                CHANGE LOCATION
              </Button>
            </Box>
          </div>
        </div>
      )}
      {!location ? (
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            style={{
              width: "300px",
            }}
            onClick={handleLocationChange}
          >
            CHOOSE LOCATION
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "70%",
            overflow: "hidden",
          }}
        >
          <>
            <motion.div
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Typography
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                  margin: "10px",
                  padding: "15px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> RAINFALL </Typography>
                <Typography style={{ textAlign: "right" }}>
                  <CountUp
                    end={envfactors.rainfall}
                    duration={5}
                    decimals={3}
                  />
                </Typography>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Typography
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                  margin: "10px",
                  padding: "15px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> TEMPERATURE </Typography>
                <Typography style={{ textAlign: "right" }}>
                  <CountUp
                    end={envfactors.temperature}
                    duration={5}
                    decimals={3}
                  />
                </Typography>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Typography
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                  margin: "10px",
                  padding: "15px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> HUMIDITY </Typography>
                <Typography style={{ textAlign: "right" }}>
                  <CountUp
                    end={envfactors.humidity}
                    duration={5}
                    decimals={3}
                  />
                </Typography>
              </Typography>
            </motion.div>

            {crop ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Typography
                  style={{
                    boxShadow:
                      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                    margin: "10px",
                    padding: "15px",
                    width: "300px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography> CROP </Typography>
                  <Typography style={{ textAlign: "right" }}>{crop}</Typography>
                </Typography>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 5.5,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <Typography style={{ marginTop: "20px" }}>
                    <CircularProgress />
                  </Typography>
                  <Button
                    onClick={() => {
                      handleCropChange("RICE");
                    }}
                  >
                    HI
                  </Button>
                </motion.div>
              </>
            )}
            {crop && (
              <motion.div
                initial={{ opacity: 0, y: "-100vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.5,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginTop: "20px", width: "300px" }}
                  onClick={handleNpkClick}
                >
                  PREDICT NPK
                </Button>
              </motion.div>
            )}
          </>
        </div>
      )}
    </>
  );
};

export default PredictCropView;
