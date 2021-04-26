import React, { useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Webcam from "react-webcam";
import { Grid, Button } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { Camera } from "../../../../../../Components/camera";
import {
  Root,
  Preview,
  Footer,
  GlobalStyle,
} from "../../../../../../Components/hooks";

function Video() {
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
}

const CaptureImageView = ({
  image,
  handleImage,
  handleStep,
  cameravision,
  handleCameraVision,
}) => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    handleImage(imageSrc);
  }, [webcamRef, handleImage]);

  return (
    <>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        style={{ height: "100%", overflow: "hidden" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4 }}
        >
          <Webcam
            style={{ width: "100vw", height: "70vh" }}
            audio={false}
            ref={webcamRef}
            onUserMedia={() => {
              handleCameraVision(true);
            }}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </motion.div>

        {cameravision && (
          <motion.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
          >
            <Button
              onClick={capture}
              style={{ textTransform: "none" }}
              variant="contained"
              color="primary"
              startIcon={<CameraAltIcon />}
            >
              Capture Image
            </Button>
          </motion.div>
        )}
      </Grid>
      <Video />
    </>
  );
};
export default CaptureImageView;
