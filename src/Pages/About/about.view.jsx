import React from "react";
import Navbar from "../../Components/Navbar";
import { motion } from "framer-motion";
import { Grid, Box, Typography } from "@material-ui/core";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 100,
    },
  },
};

const AboutView = () => {
  return (
    <>
      <div
        style={{
          background: "black",
          height: "100%",
        }}
      >
        {/* <div style={{ textAlign: "left" }}>
          <Navbar />
        </div> */}
        <Box style={{ color: "#9ACD32" }}>
          <motion.h5
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            ABOUT
          </motion.h5>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                src="https://cff2.earth.com/uploads/2019/02/15172904/New-method-to-increase-crop-growth-can-help-feed-growing-population-730x410.jpg"
                alt="crops"
                style={{ width: "400px", height: "300px" }}
              />
              <h6>CROP RECOMMENDATION</h6>
              <Typography style={{ color: "white", margin: "0 20px 0 20px" }}>
                Recommend crop using machine learning techniques recommend crop
                using machine learning techniques recommend crop using machine
                learning techniques
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://i.guim.co.uk/img/media/538955ce854fce14ee4b688239838776b50e87a9/0_26_1280_768/master/1280.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b5146dd44bed6d9f903b5b65838aba4f"
                alt="weeds"
                style={{ width: "400px", height: "300px" }}
              />
              <h6>WEED DETECTION</h6>
              <Typography style={{ color: "white", margin: "0 20px 0 20px" }}>
                Recommend crop using machine learning techniques recommend crop
                using machine learning techniques recommend crop using machine
                learning techniques
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default AboutView;
