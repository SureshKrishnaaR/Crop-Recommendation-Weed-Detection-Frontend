import React from "react";

import FertilizerQuestionView from "./fertilizerQuestion.view";

const FertilizerQuestion = ({
  page,
  handlePageChange,
  approach,
  handleApproachChange,
}) => {
  const handleYes = () => {
    handleApproachChange(1);
    handlePageChange(2);
  };

  const handleNo = () => {
    handleApproachChange(2);
    handlePageChange(2);
  };

  return (
    <>
      <FertilizerQuestionView handleYes={handleYes} handleNo={handleNo} />
    </>
  );
};

export default FertilizerQuestion;
