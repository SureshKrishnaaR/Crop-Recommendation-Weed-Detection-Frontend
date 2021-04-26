import React, { useState, useEffect } from "react";
import WeedDetectionView from "./weeddetection.view";
import { useDispatch } from "react-redux";

import {
  showBackDrop,
  hideBackDrop,
} from "../../../../redux/ActionCreators/backdrop.action";
import { weedDetection } from "../../../../utils/requests";

const WeedDetection = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(0);
  const [outputMatrix, setOutputMatrix] = useState(null);

  const [cameravision, setCameraVision] = useState(false);

  const handleStep = (val) => {
    if (val === 0) {
      // dispatch(showBackDrop());
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

  const handleWeedDetection = () => {
    weedDetection(image.slice(23, image.length))
      .then((res) => {
        setOutputMatrix(res);
        handleStep(2);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!step) {
      // dispatch(showBackDrop());
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
        handleWeedDetection={handleWeedDetection}
      />
    </>
  );
};
export default WeedDetection;
