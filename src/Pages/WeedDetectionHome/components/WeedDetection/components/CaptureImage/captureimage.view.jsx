import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { Grid, Button } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const CaptureImageView = ({ image, handleImage, handleStep }) => {
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
        style={{ height: "100%" }}
      >
        <Webcam
          style={{ width: "100vw", height: "70vh" }}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <Button
          onClick={capture}
          style={{ textTransform: "none" }}
          variant="contained"
          color="primary"
          startIcon={<CameraAltIcon />}
        >
          Capture Image
        </Button>
      </Grid>
    </>
  );
};
export default CaptureImageView;
