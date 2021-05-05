//built in modules
import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import LandscapeIcon from "@material-ui/icons/Landscape";

const GetAreaView = ({
  page,
  handlePageChange,
  area,
  handleAreaChange,
  areaval,
  handleAreaValChange,
}) => {
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );

  return (
    <>
      <Typography variant="h6" style={{ marginBottom: "30px" }}>
        ENTER AREA
      </Typography>
      <FormControl
        style={{
          width: "300px",
          alignItems: "center",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="area"
                disabled={!userDetails["area"] && true}
                checked={area === 0}
                onChange={() => {
                  handleAreaChange(0);
                }}
              />
            }
            label="Use Area in Profile"
          />
          {!userDetails["area"] && (
            <Link to="/profile">Update profile to enable this option</Link>
          )}
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="area"
                checked={area === 1}
                onChange={() => {
                  handleAreaChange(1);
                }}
              />
            }
            label="Enter Area manually"
          />
          {area === 1 && (
            <FormControl
              style={{
                width: "300px",
                margin: "auto",
                textAlign: "center",
                marginTop: "20px",
              }}
              variant="outlined"
              value={areaval}
              onChange={handleAreaValChange}
            >
              <InputLabel>Area</InputLabel>
              <OutlinedInput
                labelWidth={36}
                type="number"
                id="area"
                name="area"
                value={areaval}
                endAdornment={
                  <InputAdornment position="end">
                    <LandscapeIcon style={{ color: "#777" }} />
                  </InputAdornment>
                }
              ></OutlinedInput>
            </FormControl>
          )}
          {(area === 0 || (area === 1 && areaval)) && (
            <Box pt={2} style={{ textAlign: "center" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Typography>
                  TOTAL LAND AREA - {areaval} {" m"}
                  <sup>2</sup>
                </Typography>
              </motion.div>
              <motion.div
                style={{ marginTop: "30px" }}
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    yoyo: Infinity,
                  },
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    console.log(handlePageChange);
                    handlePageChange(8);
                  }}
                >
                  NEXT
                </Button>
              </motion.div>
            </Box>
          )}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default GetAreaView;
