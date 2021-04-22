import React, { useState } from "react";
import WeedDetectionView from "./weeddetection.view";
const WeedDetection = () => {
  const [image, setImage] = useState(null);
  const [step, setStep] = useState(0);
  const handleStep = (val) => {
    setStep(val);
  };
  const handleImage = (img) => {
    handleStep(step + 1);
    setImage(img);
  };
  return (
    <>
      <WeedDetectionView
        step={step}
        image={image}
        handleStep={handleStep}
        handleImage={handleImage}
      />
    </>
  );
};
export default WeedDetection;
