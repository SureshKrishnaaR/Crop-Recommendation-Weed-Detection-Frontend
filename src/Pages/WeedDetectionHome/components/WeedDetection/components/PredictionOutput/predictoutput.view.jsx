import React, { useEffect, useRef } from "react";
import {
  Grid,
  useMediaQuery,
  Button,
  Chip,
  Avatar,
  Box,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ReplayIcon from "@material-ui/icons/Replay";

const PredictOutputView = ({ image, outputMatrix, handleStep }) => {
  const cammediatheme = useTheme();
  const history = useHistory();
  const matches = useMediaQuery(cammediatheme.breakpoints.up("sm"));
  const canvas = useRef();
  let ctx = null;
  useEffect(() => {
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
  }, []);
  return (
    <>
      <div style={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <canvas ref={canvas} width="640px" height="410px"></canvas>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Box
              style={{
                margin: "10px",
                width: "250px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Chip
                  avatar={<Avatar style={{ background: "green" }}> </Avatar>}
                  label="Crop"
                  clickable
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Chip
                  avatar={<Avatar style={{ background: "#FFA500" }}> </Avatar>}
                  label="Weed"
                  clickable
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
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
      </div>
    </>
  );
};
export default PredictOutputView;
