import React from "react";
import GetArea from "./components/getArea";

const PredictCropYieldView = ({
  page,
  handlePageChange,
  chosenstate,
  locationval,
  crop,
  area,
  handleAreaChange,
  areaval,
  handleAreaValChange,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {page === 7 && (
          <GetArea
            page={page}
            handlePageChange={handlePageChange}
            area={area}
            handleAreaChange={handleAreaChange}
            areaval={areaval}
            handleAreaValChange={handleAreaValChange}
          />
        )}
      </div>
    </>
  );
};

export default PredictCropYieldView;
