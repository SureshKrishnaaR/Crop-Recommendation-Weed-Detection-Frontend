import React, { useState, useEffect } from "react";
import WeedDetectionView from "./weeddetection.view";
import { useDispatch } from "react-redux";

import {
  showBackDrop,
  hideBackDrop,
} from "../../../../redux/ActionCreators/backdrop.action";
import output from "../../output.png";

const WeedDetection = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(() => output);
  const [step, setStep] = useState(2);
  const [outputMatrix, setOutputMatrix] = useState([
    [[0, 0, 224, 224], 0.9999970643373448, "weed"],
  ]);

  const [cameravision, setCameraVision] = useState(false);

  const handleStep = (val) => {
    if (val === 0) {
      dispatch(showBackDrop());
    }
    setStep(val);
  };

  const handleImage = (img) => {
    handleStep(step + 1);
    setImage(img);
  };

  const handleCameraVision = (val) => {
    if (val) {
      dispatch(hideBackDrop());
    }

    setCameraVision(val);
  };

  useEffect(() => {
    if (!step) {
      dispatch(showBackDrop());
    }
  }, [dispatch, step]);

  return (
    <>
      <WeedDetectionView
        step={step}
        image={image}
        outputMatrix={outputMatrix}
        handleStep={handleStep}
        handleImage={handleImage}
        cameravision={cameravision}
        handleCameraVision={handleCameraVision}
      />
    </>
  );
};
export default WeedDetection;
