import React from "react";
import PredictOutputView from "./predictoutput.view.jsx";
const PredictOutput = ({ image, outputMatrix }) => {
  return (
    <>
      <PredictOutputView image={image} outputMatrix={outputMatrix} />
    </>
  );
};
export default PredictOutput;
