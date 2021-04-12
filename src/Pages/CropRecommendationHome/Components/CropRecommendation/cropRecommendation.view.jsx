import React from "react";
import FertilizerQuestion from "../FertilizerQuestion";
import PredictCrop from "../PredictCrop";

const CropRecommendationView = ({ page, handlePageChange }) => {
  return (
    <>
      <div
        style={{
          background: "#ffffff",
          backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)",
          height: "100%",
        }}
      >
        {page === 1 ? (
          <FertilizerQuestion page={page} handlePageChange={handlePageChange} />
        ) : (
          page === 2 && (
            <PredictCrop page={page} handlePageChange={handlePageChange} />
          )
        )}
      </div>
    </>
  );
};

export default CropRecommendationView;
