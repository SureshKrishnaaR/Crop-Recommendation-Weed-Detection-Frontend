import React from "react";
import { motion } from "framer-motion";
import { Typography, Box, Button } from "@material-ui/core";
import CountUp from "react-countup";

const NpkPredictionView = ({
  page,
  handlePageChange,
  envfactors,
  crop,
  npkValues,
  handleNpkChange,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: "-300vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 40,
            }}
          >
            <Typography
              style={{
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                margin: "10px",
                padding: "15px",
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography> NITROGEN - N </Typography>
              <Typography style={{ textAlign: "right" }}>
                <CountUp end={npkValues.nitrogen} duration={5} decimals={3} />
              </Typography>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-200vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 40,
            }}
          >
            <Typography
              style={{
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                margin: "10px",
                padding: "15px",
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography> PHOSPOROUS - P </Typography>
              <Typography style={{ textAlign: "right" }}>
                <CountUp end={npkValues.phosporous} duration={5} decimals={3} />
              </Typography>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 40,
            }}
          >
            <Typography
              style={{
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                margin: "10px",
                padding: "15px",
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography> POTASSIUM - K </Typography>
              <Typography style={{ textAlign: "right" }}>
                <CountUp end={npkValues.potassium} duration={5} decimals={3} />
              </Typography>
            </Typography>
          </motion.div>
        </div>
        <Box mt={3}>
          <Button color="primary" variant="contained">
            CHOOSE FERTILIZER
          </Button>
        </Box>
      </div>
    </>
  );
};

export default NpkPredictionView;
