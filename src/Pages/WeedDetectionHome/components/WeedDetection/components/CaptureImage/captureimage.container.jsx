import React, { useEffect } from "react";
import CaptureImageView from "./captureimage.view.jsx";
const CaptureImage = ({
  image,
  handleImage,
  handleStep,
  cameravision,
  handleCameraVision,
}) => {
  useEffect(() => {
    return () => {
      handleCameraVision(false);
    };
  }, []);

  return (
    <>
      <CaptureImageView
        image={image}
        handleImage={handleImage}
        handleStep={handleStep}
        cameravision={cameravision}
        handleCameraVision={handleCameraVision}
      />
    </>
  );
};
export default CaptureImage;
