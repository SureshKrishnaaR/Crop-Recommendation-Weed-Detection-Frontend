import React from "react";
import { Button, Typography, Grid } from "@material-ui/core";

const FertilizerQuestionView = ({ handleYes, handleNo }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
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
            <Button variant="contained" color="primary" onClick={handleYes}>
              YES
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleNo}>
              NO
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FertilizerQuestionView;
