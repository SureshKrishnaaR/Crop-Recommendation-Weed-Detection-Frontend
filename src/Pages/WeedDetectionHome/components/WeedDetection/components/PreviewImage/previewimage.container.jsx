import React from "react";
import PreviewImageView from "./previewimage.view.jsx";
const PreviewImage = ({
  handleStep,
  image,
  handleImage,
  handleWeedDetection,
}) => {
  return (
    <>
      <PreviewImageView
        handleStep={handleStep}
        image={image}
        handleImage={handleImage}
        handleWeedDetection={handleWeedDetection}
      />
    </>
  );
};
export default PreviewImage;
