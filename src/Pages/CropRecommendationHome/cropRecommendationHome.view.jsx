import React from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
  visible: {
    opacity: 1,
    x: "0",
  },
  hover: {
    scale: 1.1,
    originX: 0,
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1, duration: 0.8 },
  },
};

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

const CropRecommendationHomeView = () => {
  const mediatheme = useTheme();
  const matches = useMediaQuery(mediatheme.breakpoints.up("md"));
  const history = useHistory();
  return (
    <>
      <div style={{ background: green[500], height: "100%" }}>
        <motion.h5
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          style={{ color: "white" }}
        >
          CROP RECOMMENDATION
        </motion.h5>
        <Box ml={matches && 4}>
          <Grid container alignItems="center">
            {matches && (
              <Grid item xs={12} md={6} style={{ padding: "0 0 0 70px" }}>
                <Box py={3}>
                  <Typography
                    style={{
                      color: "white",
                      textAlign: "justify",
                    }}
                  >
                    Agriculture in India plays a major role in the economy and
                    employment. 70% of Indian population directly relies on
                    agriculture. This project focuses on solving multiple
                    problems which the farmers would face. The common difficulty
                    present among the Indian farmers is, they don’t opt for the
                    proper crop based on their soil requirements. Due to this,
                    they face a serious setback in productivity. This problem of
                    the farmers has been solved through precision agriculture.
                    In this project, we propose a system which would suggest
                    crops based on the results obtained using a machine learning
                    approach. The system maps the soil and crop data to predict
                    the list of suitable crops for the soil. Hence it leaves
                    upon the user to decide on the crop to be sown. Thus, the
                    system helps to provide knowledge to the dilettante farmers.
                  </Typography>
                </Box>

                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  style={{ width: "200px", height: "40px", margin: "auto" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/cropRecommendation")}
                    style={{
                      border: "2px solid white",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    CHOOSE CROP
                  </Button>
                </motion.div>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                src="https://cff2.earth.com/uploads/2019/02/15172904/New-method-to-increase-crop-growth-can-help-feed-growing-population-730x410.jpg"
                alt="crops"
                style={{
                  width: matches ? "500px" : "250px",
                  height: matches ? "300px" : "215px",
                  border: "2px solid white",
                  boxShadow: "rgba(1, 1, 1, 0.2) 0px 20px 30px",
                }}
              />
              {!matches && (
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/cropRecommendation")}
                    style={{ margin: "30px" }}
                  >
                    CHOOSE CROP
                  </Button>
                </motion.div>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default CropRecommendationHomeView;
