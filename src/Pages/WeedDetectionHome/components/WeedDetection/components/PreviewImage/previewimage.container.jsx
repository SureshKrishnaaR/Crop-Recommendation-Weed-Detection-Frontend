import React from "react";
import PreviewImageView from "./previewimage.view.jsx";
const PreviewImage = ({ handleStep, image, handleImage }) => {
  return (
    <>
      <PreviewImageView
        handleStep={handleStep}
        image={image}
        handleImage={handleImage}
      />
    </>
  );
};
export default PreviewImage;
