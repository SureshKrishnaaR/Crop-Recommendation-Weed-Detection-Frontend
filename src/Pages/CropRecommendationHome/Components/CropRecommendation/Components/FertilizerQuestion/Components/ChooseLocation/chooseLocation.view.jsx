import React from "react";
import {
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
} from "@material-ui/core";

const ChooseLocationView = ({
  page,
  location,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
  handleLocationChange,
  handleNpkClick,
  handleEnvFactorsChange,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <h5>Hello Location...! I'm gonna finish u soon</h5>
        <Typography varaint="h4">CHOOSE LOCATION</Typography>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="location"
                  checked={location === 0}
                  onChange={() => {
                    handleLocationChange(0);
                  }}
                />
              }
              label="Use Current Location"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="location"
                  checked={location === 1}
                  onChange={() => {
                    handleLocationChange(1);
                  }}
                />
              }
              label="Use Location in Profile"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="location"
                  checked={location === 2}
                  onChange={() => {
                    handleLocationChange(2);
                  }}
                />
              }
              label="Type Location"
            />
          </FormGroup>
        </FormControl>

        <Button
          onClick={() => {
            handlePageChange(3);
          }}
        >
          NEXT
        </Button>
      </div>
    </>
  );
};

export default ChooseLocationView;
