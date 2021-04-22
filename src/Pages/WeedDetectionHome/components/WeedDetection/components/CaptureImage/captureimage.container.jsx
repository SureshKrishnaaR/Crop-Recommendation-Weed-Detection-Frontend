import React from "react";
import CaptureImageView from "./captureimage.view.jsx";
const CaptureImage = ({ image, handleImage, handleStep }) => {
  return (
    <>
      <CaptureImageView
        image={image}
        handleImage={handleImage}
        handleStep={handleStep}
      />
    </>
  );
};
export default CaptureImage;
