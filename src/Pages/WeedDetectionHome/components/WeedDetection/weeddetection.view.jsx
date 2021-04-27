import React from "react";
import { Grid } from "@material-ui/core";
import CaptureImage from "./components/CaptureImage";
import PredictOutput from "./components/PredictionOutput";

const WeedDetectionView = ({
  step,
  image,
  outputMatrix,
  handleStep,
  handleImage,
  handleWeedDetection,
}) => {
  return (
    <Grid container style={{ height: "100%" }}>
      {step === 0 ? (
        <CaptureImage
          handleStep={handleStep}
          image={image}
          handleImage={handleImage}
          handleWeedDetection={handleWeedDetection}
        />
      ) : (
        <PredictOutput
          handleStep={handleStep}
          image={image}
          outputMatrix={outputMatrix}
          handleImage={handleImage}
        />
      )}
    </Grid>
  );
};
export default WeedDetectionView;
