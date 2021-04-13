import React from "react";
import { motion } from "framer-motion";
import { Button, Typography, Grid } from "@material-ui/core";

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
          style={{ width: "300px", marginTop: "10px" }}
        >
          <Grid item>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <Button variant="contained" color="primary" onClick={handleYes}>
                YES
              </Button>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ x: "200vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <Button variant="contained" color="primary" onClick={handleNo}>
                NO
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
};

export default FertilizerQuestionView;
