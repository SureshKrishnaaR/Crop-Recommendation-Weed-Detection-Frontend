//built in modules
import React from "react";

//component files
import CaptureImageView from "./captureimage.view.jsx";

const CaptureImage = ({
  image,
  handleImage,
  handleStep,
  handleWeedDetection,
}) => {
  return (
    <>
      <CaptureImageView
        image={image}
        handleImage={handleImage}
        handleStep={handleStep}
        handleWeedDetection={handleWeedDetection}
      />
    </>
  );
};
export default CaptureImage;
