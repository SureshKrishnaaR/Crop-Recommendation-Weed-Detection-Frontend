import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { Grid } from "@material-ui/core";
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
      <Grid container item>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </Grid>
    </>
  );
};
export default CaptureImageView;
