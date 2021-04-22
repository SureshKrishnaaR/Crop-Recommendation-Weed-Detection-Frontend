import React from "react";
import {
  Button,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@material-ui/core";
import { motion } from "framer-motion";
import Dropdown from "../../../../../../../../components/Dropdown";
import CountUp from "react-countup";

const GetSeasonView = ({
  page,
  handlePageChange,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
  handleSeasonAPI,
  allseasons,
  cropyield,
  handlePredictCropYield,
}) => {
  return (
    <>
      <Typography variant="h6" style={{ marginBottom: "30px" }}>
        CHOOSE SEASON
      </Typography>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="season"
                checked={season === 0}
                onChange={() => {
                  handleSeasonChange(0);
                }}
              />
            }
            label="Choose Season from Profile"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="season"
                checked={season === 1}
                onChange={() => {
                  handleSeasonChange(1);
                  handleSeasonAPI();
                }}
              />
            }
            label="Enter Season manually"
          />
          {season === 1 && (
            <>
              <Box py={2}>
                <Dropdown
                  label="Season"
                  value={seasonval}
                  options={allseasons}
                  handleChange={handleSeasonValChange}
                  id="seasonval"
                  name="seasonval"
                />
              </Box>
            </>
          )}
          {(season === 0 || (season === 1 && seasonval)) && (
            <>
              <Box pt={2} style={{ textAlign: "center" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Typography>SEASON - {seasonval.toUpperCase()}</Typography>
                </motion.div>
              </Box>
              {!cropyield ? (
                <>
                  <motion.div
                    style={{ textAlign: "center", marginTop: "20px" }}
                    initial={{ opacity: 0, x: "-100vw" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 1,
                      type: "spring",
                      stiffness: 150,
                    }}
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
                      onClick={() => {
                        handlePredictCropYield();
                      }}
                    >
                      PREDICT CROP YIELD
                    </Button>
                  </motion.div>
                </>
              ) : (
                <>
                  <Box>
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{ marginBottom: "20px" }}
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
                        <Typography> CROP YIELD </Typography>
                        <Typography style={{ textAlign: "right" }}>
                          <CountUp end={cropyield} duration={5} decimals={4} />
                        </Typography>
                      </Typography>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: "-100vw" }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 5,
                        type: "spring",
                        stiffness: 150,
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          yoyo: Infinity,
                        },
                      }}
                      style={{ textAlign: "center" }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          handlePageChange(9);
                        }}
                      >
                        DONE
                      </Button>
                    </motion.div>
                  </Box>
                </>
              )}
            </>
          )}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default GetSeasonView;
