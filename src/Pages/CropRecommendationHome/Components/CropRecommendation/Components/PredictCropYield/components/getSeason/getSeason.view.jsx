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

const GetSeasonView = ({
  page,
  handlePageChange,
  season,
  seasonval,
  handleSeasonChange,
  handleSeasonValChange,
  handleSeasonAPI,
  allseasons,
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
            label="Choose Soil Type from Profile"
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
            label="Enter Soil Type manually"
          />
          {season === 1 && (
            <>
              <Box py={2}>
                <Dropdown
                  label="Soil Type"
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
                    handlePageChange(9);
                  }}
                >
                  PREDICT CROP YIELD
                </Button>
              </motion.div>
            </>
          )}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default GetSeasonView;
