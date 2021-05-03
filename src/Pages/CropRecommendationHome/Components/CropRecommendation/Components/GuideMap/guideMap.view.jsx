import React from "react";
import { Stepper, Step, StepLabel, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const GuideMapView = ({ progress, approach }) => {
  const mediatheme2 = useTheme();
  const matchforxl = useMediaQuery(mediatheme2.breakpoints.up("lg"));
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
      <Stepper
        activeStep={progress}
        alternativeLabel={matchforxl && true}
        orientation={matchforxl ? "horizontal" : "vertical"}
      >
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
