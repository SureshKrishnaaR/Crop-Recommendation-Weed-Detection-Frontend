import React, { useState } from "react";
import CropRecommendationView from "./cropRecommendation.view";

const CropRecommendation = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <CropRecommendationView page={page} handlePageChange={handlePageChange} />
    </>
  );
};

export default CropRecommendation;
