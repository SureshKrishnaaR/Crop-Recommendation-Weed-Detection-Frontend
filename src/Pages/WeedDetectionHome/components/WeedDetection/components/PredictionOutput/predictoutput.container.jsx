import React from "react";
import PredictOutputView from "./predictoutput.view.jsx";
const PredictOutput = ({
  image,
  outputMatrix,
  handleStep,
  setOutputMatrix,
}) => {
  return (
    <>
      <PredictOutputView
        image={image}
        outputMatrix={outputMatrix}
        handleStep={handleStep}
        setOutputMatrix={setOutputMatrix}
      />
    </>
  );
};
export default PredictOutput;
