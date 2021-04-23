import React, { useState, useEffect } from "react";
import WeedDetectionView from "./weeddetection.view";
import { useDispatch } from "react-redux";

import {
  showBackDrop,
  hideBackDrop,
} from "../../../../redux/ActionCreators/backdrop.action";

const WeedDetection = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(0);

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
    dispatch(showBackDrop());
  }, []);

  return (
    <>
      <WeedDetectionView
        step={step}
        image={image}
        handleStep={handleStep}
        handleImage={handleImage}
        cameravision={cameravision}
        handleCameraVision={handleCameraVision}
      />
    </>
  );
};
export default WeedDetection;
