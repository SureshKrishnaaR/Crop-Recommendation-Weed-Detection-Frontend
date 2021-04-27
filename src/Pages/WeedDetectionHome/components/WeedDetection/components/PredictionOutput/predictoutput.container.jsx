import React from "react";
import PredictOutputView from "./predictoutput.view.jsx";
const PredictOutput = ({ image, outputMatrix,handleStep }) => {
  return (
    <>
      <PredictOutputView image={image} outputMatrix={outputMatrix} handleStep={handleStep}/>
    </>
  );
};
export default PredictOutput;
