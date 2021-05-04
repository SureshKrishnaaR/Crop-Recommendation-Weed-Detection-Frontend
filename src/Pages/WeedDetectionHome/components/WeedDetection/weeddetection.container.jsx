import React, { useState, useEffect } from "react";
import WeedDetectionView from "./weeddetection.view";

import { weedDetection } from "../../../../utils/requests";

const WeedDetection = () => {
  const [image, setImage] = useState(null);
  const [step, setStep] = useState(0);
  const [outputMatrix, setOutputMatrix] = useState(null);
  const handleStep = (val) => {
    setStep(val);
  };

  const handleImage = (img) => {
    setImage(img);
  };
  const handleWeedDetection = () => {
    handleStep(2);
    weedDetection(image.slice(23, image.length))
      .then((res) => {
        setOutputMatrix(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <WeedDetectionView
        step={step}
        image={image}
        outputMatrix={outputMatrix}
        handleStep={handleStep}
        handleImage={handleImage}
        handleWeedDetection={handleWeedDetection}
        setOutputMatrix={setOutputMatrix}
      />
    </>
  );
};
export default WeedDetection;
