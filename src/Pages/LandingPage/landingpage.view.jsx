import React from "react";
import Login from "./components/Login";
import { Box } from "@material-ui/core";

const LandingPageView = () => {
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Login />
      </Box>
    </>
  );
};

export default LandingPageView;
