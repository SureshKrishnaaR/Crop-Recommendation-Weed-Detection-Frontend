import React from "react";
import { motion } from "framer-motion";
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  Typography,
  Box,
  Button,
} from "@material-ui/core";

import Dropdown from "../../../../../../../../Components/Dropdown";

const PredictFertilizerView = ({
  page,
  handlePageChange,
  envfactors,
  crop,
  npkValues,
  fertilizer,
  handleFertilizerChange,
  soiltype,
  soiltypeval,
  handleSoilTypeChange,
  handleSoilTypeValChange,
  allsoiltypes,
  handleSoilTypeAPI,
  handlePredictFertilizer,
  handleCropYieldPage,
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
        }}
      >
        <Box pb={4}>
          <Typography variant="h6">PREDICT FERTILIZER</Typography>
        </Box>

        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="soil_type"
                  checked={soiltype === 0}
                  onChange={() => {
                    handleSoilTypeChange(0);
                  }}
                />
              }
              label="Choose Soil Type from Profile"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="soil_type"
                  checked={soiltype === 1}
                  onChange={() => {
                    handleSoilTypeChange(1);
                    handleSoilTypeAPI();
                  }}
                />
              }
              label="Enter Soil Type manually"
            />
            {soiltype === 1 && (
              <>
                <Box py={2}>
                  <Dropdown
                    label="Soil Type"
                    value={soiltypeval}
                    options={allsoiltypes}
                    handleChange={handleSoilTypeValChange}
                    id="soiltypeval"
                    name="soiltypeval"
                  />
                </Box>
              </>
            )}
            {(soiltype === 0 || (soiltype === 1 && soiltypeval)) && (
              <>
                <Box pt={2} style={{ textAlign: "center" }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Typography>
                      SOIL TYPE - {soiltypeval.toUpperCase()}
                    </Typography>
                  </motion.div>
                </Box>
                <Box pt={2} style={{ textAlign: "center" }}>
                  {!fertilizer ? (
                    <motion.div
                      initial={{ opacity: 0, x: "-100vw" }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
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
                          handlePredictFertilizer();
                        }}
                      >
                        PREDICT FERTILIZER
                      </Button>
                    </motion.div>
                  ) : (
                    <Box>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: "40px" }}
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
                          <Typography> FERTILIZER </Typography>
                          <Typography style={{ textAlign: "right" }}>
                            {fertilizer.toUpperCase()}
                          </Typography>
                        </Typography>
                      </motion.div>
                      <motion.div
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
                            handleCropYieldPage();
                          }}
                        >
                          PREDICT CROP YIELD
                        </Button>
                      </motion.div>
                    </Box>
                  )}
                </Box>
              </>
            )}
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
};

export default PredictFertilizerView;
