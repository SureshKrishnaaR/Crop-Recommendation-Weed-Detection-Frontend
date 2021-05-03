import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const GuideMapView = ({ progress, approach }) => {
  const stepsapp1 = [
    "Choose Location",
    "Predict Crop",
    "Get NPK values",
    "Predict Fertilizer",
    "Choose Area",
    "Predict Crop Yield",
  ];
  const stepsapp2 = [
    "Choose Location",
    "Predict Crop",
    "Choose Area",
    "Predict Crop Yield",
  ];

  return (
    <>
      <Stepper activeStep={progress} alternativeLabel>
        {approach === 1
          ? stepsapp1.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))
          : stepsapp2.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
      </Stepper>
    </>
  );
};

export default GuideMapView;
