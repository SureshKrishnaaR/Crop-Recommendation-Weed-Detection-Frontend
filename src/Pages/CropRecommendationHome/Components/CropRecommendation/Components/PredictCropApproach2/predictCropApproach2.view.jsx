import React from "react";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Typography,
  Box,
  Button,
  useMediaQuery,
  CircularProgress,
} from "@material-ui/core";
import NatureIcon from "@material-ui/icons/Nature";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import { motion } from "framer-motion";
import { useTheme } from "@material-ui/core/styles";

const PredictCropApproach2View = ({
  page,
  handlePageChange,
  envfactors,
  location,
  locationval,
  handleLocationChange,
  handleLocationvalChange,
  npkValues,
  handleNpkChange,
  crop,
  handlePredictCropApproach2,
  spin,
  setSpin,
}) => {
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("sm"));

  return (
    <>
      <Box
        p={3}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: !matches && "60px",
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
            height: "20%",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ fontSize: "0.95em" }}>LOCATION</Typography>
            <Typography style={{ fontSize: "0.95em" }}>
              {locationval.toUpperCase()}
            </Typography>
          </div>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                handlePageChange(2);
              }}
            >
              CHANGE LOCATION
            </Button>
          </Box>
        </div>
      </Box>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60%",
          margin: "auto",
          gap: "20px",
        }}
      >
        {(!npkValues.nitrogen ||
          !npkValues.phosphorus ||
          !npkValues.potassium) && (
          <Typography>ENTER NPK VALUES TO PREDICT CROP</Typography>
        )}

        <FormControl style={{ width: "300px" }} variant="outlined">
          <InputLabel>Nitrogen</InputLabel>
          <OutlinedInput
            value={npkValues.nitrogen}
            onChange={handleNpkChange}
            labelWidth={60}
            type="number"
            id="nitrogen"
            name="nitrogen"
            endAdornment={
              <InputAdornment position="end">
                <NatureIcon style={{ color: "#777" }} />
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
        <FormControl style={{ width: "300px" }} variant="outlined">
          <InputLabel>Phosphorus</InputLabel>
          <OutlinedInput
            value={npkValues.phosphorus}
            onChange={handleNpkChange}
            labelWidth={85}
            type="number"
            id="phosphorus"
            name="phosphorus"
            endAdornment={
              <InputAdornment position="end">
                <NaturePeopleIcon style={{ color: "#777" }} />
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
        <FormControl style={{ width: "300px" }} variant="outlined">
          <InputLabel>Potassium</InputLabel>
          <OutlinedInput
            value={npkValues.potassium}
            onChange={handleNpkChange}
            labelWidth={75}
            type="number"
            id="potassium"
            name="potassium"
            endAdornment={
              <InputAdornment position="end">
                <EmojiNatureIcon style={{ color: "#777" }} />
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
        {npkValues.nitrogen &&
          npkValues.phosphorus &&
          npkValues.potassium &&
          (crop ? (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                }}
              >
                <Typography
                  style={{
                    boxShadow:
                      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                    margin: "5px",
                    padding: "15px",
                    width: "300px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography> CROP </Typography>
                  <Typography style={{ textAlign: "right" }}>
                    {crop.toUpperCase()}
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
                    handlePageChange(7);
                  }}
                >
                  PREDICT CROP YIELD
                </Button>
              </motion.div>
            </>
          ) : spin ? (
            <Typography style={{ marginTop: "20px" }}>
              <CircularProgress />
            </Typography>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
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
                  setSpin(true);
                  setTimeout(handlePredictCropApproach2, 2000);
                }}
              >
                PREDICT CROP
              </Button>
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default PredictCropApproach2View;
