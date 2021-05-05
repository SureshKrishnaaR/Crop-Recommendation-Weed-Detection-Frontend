//built in modules
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
          style={{ width: "400px", marginTop: "30px", overflow: "hidden" }}
        >
          <Grid item>
            <motion.div
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <IconButton color="primary" onClick={handleYes}>
                <DoneIcon style={{ fontSize: "1.4em" }} />
              </IconButton>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <IconButton style={{ color: "red" }} onClick={handleNo}>
                <ClearIcon style={{ fontSize: "1.4em" }} />
              </IconButton>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
};

export default FertilizerQuestionView;
