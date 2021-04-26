import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, Button } from "@material-ui/core";
import { Camera } from "../../../../../../Components/camera";
import { Root, Preview, Footer, GlobalStyle } from "./styles";

const CaptureImageView = ({
  image,
  handleImage,
  handleStep,
  cameravision,
  handleCameraVision,
}) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <>
      <Root>
        {isCameraOpen && (
          <Camera
            onCapture={(blob) => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          </div>
        )}

        <Footer>
          <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
          <button
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
          >
            Close Camera
          </button>
        </Footer>
      </Root>
      <GlobalStyle />
    </>
  );
};
export default CaptureImageView;
