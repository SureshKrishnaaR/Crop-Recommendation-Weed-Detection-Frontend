import React from "react";
import FertilizerQuestionView from "./fertilizerQuestion.view";

const FertilizerQuestion = ({ page, handlePageChange }) => {
  const handleYes = () => {
    handlePageChange(2);
  };

  const handleNo = () => {
    handlePageChange(3);
  };

  return (
    <>
      <FertilizerQuestionView handleYes={handleYes} handleNo={handleNo} />
    </>
  );
};

export default FertilizerQuestion;
