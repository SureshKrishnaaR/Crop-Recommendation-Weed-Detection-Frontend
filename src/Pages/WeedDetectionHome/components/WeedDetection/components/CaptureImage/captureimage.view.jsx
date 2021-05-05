//built in modules
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";
import NatureIcon from "@material-ui/icons/Nature";

//component files
import { Camera } from "../../../../../../Components/camera";

//style imports
import { Root, Preview, Footer, GlobalStyle } from "./styles";

const CaptureImageView = ({ image, handleImage, handleWeedDetection }) => {
  const [cardImage, setCardImage] = useState();
  return (
    <>
      <Root>
        {cardImage ? (
          <>
            <Preview src={cardImage} />
            <Footer>
              <motion.div
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
              >
                <Button
                  style={{ textTransform: "none", margin: "10px" }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setCardImage(undefined);
                  }}
                  startIcon={<FlipCameraIosIcon />}
                >
                  Retake Image
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
              >
                <Button
                  style={{ textTransform: "none", margin: "10px" }}
                  variant="contained"
                  onClick={() => {
                    handleWeedDetection();
                  }}
                  color="primary"
                  endIcon={<NatureIcon />}
                >
                  Detect Weed
                </Button>
              </motion.div>
            </Footer>
          </>
        ) : (
          <Camera
            onCapture={(blob) => {
              var reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onloadend = function () {
                var base64data = reader.result;
                setCardImage(base64data);
                handleImage(base64data);
              };
            }}
            onClear={() => setCardImage(undefined)}
          />
        )}
      </Root>
      <GlobalStyle />
    </>
  );
};
export default CaptureImageView;
