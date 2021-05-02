import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  useMediaQuery,
  Button,
  Chip,
  Avatar,
  Box,
  LinearProgress,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import {
  SemipolarLoading,
  CommonLoading,
  WindMillLoading,
} from "react-loadingg";
import { PacmanLoader, GridLoader, HashLoader } from "react-spinners";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ReplayIcon from "@material-ui/icons/Replay";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const PredictOutputView = ({ image, outputMatrix, handleStep }) => {
  const [progress, setProgress] = useState(3.85);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 3.85
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const cammediatheme = useTheme();
  const history = useHistory();
  const matches = useMediaQuery(cammediatheme.breakpoints.up("md"));
  const canvas = useRef();
  let ctx = null;
  useEffect(() => {
    if (outputMatrix) {
      const canvasEle = canvas.current;
      ctx = canvasEle.getContext("2d");
      var imageObj = new Image();
      imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0);
        ctx.beginPath();
        ctx.lineWidth = 5;
        outputMatrix.map((output) => {
          ctx.strokeStyle = output[2] === "crop" ? "green" : "yellow";
          ctx.rect(...output[0]);
        });
        ctx.stroke();
      };
      imageObj.src = image;
    }
  });
  return (
    <>
      {!outputMatrix ? (
        <Grid container justify="center" alignItems="center">
          <SemipolarLoading color="#43a047" />
        </Grid>
      ) : (
        <div style={{ justifyContent: "center" }}>
          <Grid
            container
            item
            justify="center"
            alignItems="center"
            style={{ height: "100%", overflow: "hidden" }}
          >
            <Grid item container xs={12} justify="center" alignItems="center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <canvas
                  ref={canvas}
                  width={matches ? "600px" : "410px"}
                  height={matches ? "400px" : "300px"}
                ></canvas>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" style={{ marginTop: "5px" }}>
                <Box
                  style={{
                    width: "250px",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.15 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <Chip
                      avatar={
                        <Avatar style={{ background: "green" }}> </Avatar>
                      }
                      label="Crop"
                      clickable
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.15 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <Chip
                      avatar={
                        <Avatar style={{ background: "#FFA500" }}> </Avatar>
                      }
                      label="Weed"
                      clickable
                    />
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" style={{ marginTop: "40px" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 3 }}
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
                  transition={{ duration: 1, delay: 3 }}
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
                      handleStep(0);
                    }}
                  >
                    RESTART
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};
export default PredictOutputView;
