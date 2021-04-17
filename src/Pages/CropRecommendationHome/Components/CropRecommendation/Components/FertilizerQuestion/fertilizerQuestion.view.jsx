import React from "react";
import { motion } from "framer-motion";
import { Typography, Grid, IconButton } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

const FertilizerQuestionView = ({ handleYes, handleNo }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
          margin: "auto",
        }}
      >
        <Typography variant="h6">
          Are you interested in using fertilizer?
        </Typography>

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          style={{ width: "300px", marginTop: "10px", overflow: "hidden" }}
        >
          <Grid item>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0, scale: 1.5 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <IconButton color="primary" onClick={handleYes}>
                <DoneIcon />
              </IconButton>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0, scale: 1.5 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <IconButton style={{ color: "red" }} onClick={handleNo}>
                <ClearIcon />
              </IconButton>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
};

export default FertilizerQuestionView;
