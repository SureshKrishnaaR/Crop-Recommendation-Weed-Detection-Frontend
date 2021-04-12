import React from "react";
import { Typography, Button } from "@material-ui/core";

const PredictCropView = ({
  page,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Button
          color="primary"
          variant="outlined"
          style={{
            margin: "10px",
            width: "200px",
          }}
        >
          CHOOSE LOCATION
        </Button>
        <Typography
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            margin: "10px",
            padding: "15px",
            width: "200px",
          }}
        >
          RAINFALL {envfactors.rainfall}
        </Typography>
        <Typography
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            margin: "10px",
            padding: "15px",
            width: "200px",
          }}
        >
          TEMPERATURE {envfactors.temperature}
        </Typography>
        <Typography
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            margin: "10px",
            padding: "15px",
            width: "200px",
          }}
        >
          HUMIDITY {envfactors.humidity}
        </Typography>
        <Typography
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            margin: "20px",
            padding: "20px",
            width: "300px",
          }}
        >
          CROP {crop}
        </Typography>
        <Button color="primary" variant="contained">
          PREDICT NPK
        </Button>
      </div>
    </>
  );
};

export default PredictCropView;
