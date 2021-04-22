import React from "react";
import { Grid } from "@material-ui/core";
import CaptureImage from "./components/CaptureImage";
import PreviewImage from "./components/PreviewImage";
import PredictOutput from "./components/PredictionOutput";

const WeedDetectionView = ({ step, image, handleStep, handleImage }) => {
  return (
    <Grid container style={{ height: "100%" }}>
      {step === 0 ? (
        <CaptureImage
          handleStep={handleStep}
          image={image}
          handleImage={handleImage}
        />
      ) : step === 1 ? (
        <PreviewImage
          handleStep={handleStep}
          image={image}
          handleImage={handleImage}
        />
      ) : (
        <PredictOutput
          handleStep={handleStep}
          image={image}
          handleImage={handleImage}
        />
      )}
    </Grid>
  );
};
export default WeedDetectionView;
