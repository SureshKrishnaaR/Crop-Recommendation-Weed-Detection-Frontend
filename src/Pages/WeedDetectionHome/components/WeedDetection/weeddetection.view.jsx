import React from "react";
import { Grid } from "@material-ui/core";
import CaptureImage from "./components/CaptureImage";
import PreviewImage from "./components/PreviewImage";
import PredictOutput from "./components/PredictionOutput";

const WeedDetectionView = ({
  step,
  image,
  outputMatrix,
  handleStep,
  handleImage,
  cameravision,
  handleCameraVision,
  handleWeedDetection,
}) => {
  return (
    <Grid container style={{ height: "100%" }}>
      {step === 0 ? (
        <CaptureImage
          handleStep={handleStep}
          image={image}
          handleImage={handleImage}
          cameravision={cameravision}
          handleCameraVision={handleCameraVision}
        />
      ) : step === 1 ? (
        <PreviewImage
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
