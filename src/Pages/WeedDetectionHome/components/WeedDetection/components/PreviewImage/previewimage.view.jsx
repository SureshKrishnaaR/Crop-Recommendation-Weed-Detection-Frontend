import React from "react";
import { motion } from "framer-motion";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
import NatureIcon from "@material-ui/icons/Nature";

const PreviewImageView = ({ handleStep, image, handleImage }) => {
  const themecam = useTheme();
  const matches = useMediaQuery(themecam.breakpoints.up("sm"));

  return (
    <>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        style={{ height: "100%", overflow: "hidden" }}
      >
        <Grid item container xs={12} justify="center" alignItems="center">
          <img
            src={image}
            alt="Preview"
            style={{
              width: matches ? "60vw" : "100vw",
              height: matches ? "70vh" : "32vh",
            }}
          />
        </Grid>

        <Grid item container xs={12} justify="center" alignItems="center">
          <motion.div
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
          >
            <Button
              style={{ textTransform: "none", margin: "10px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                handleStep(0);
              }}
              startIcon={<FlipCameraIosIcon />}
            >
              Retake Image
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
          >
            <Button
              style={{ textTransform: "none", margin: "10px" }}
              variant="contained"
              onClick={() => {
                handleStep(2);
              }}
              color="primary"
              endIcon={<NatureIcon />}
            >
              Detect Weed
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
};
export default PreviewImageView;
