import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Webcam from "react-webcam";
import { Grid, Button } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

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
    </>
  );
};
export default CaptureImageView;
