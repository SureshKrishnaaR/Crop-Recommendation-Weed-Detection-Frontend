import React from "react";
import GetAreaView from "./getArea.view";

const GetArea = ({
  page,
  handlePageChange,
  area,
  handleAreaChange,
  areaval,
  handleAreaValChange,
}) => {
  return (
    <>
      <GetAreaView
        page={page}
        handlePageChange={handlePageChange}
        area={area}
        handleAreaChange={handleAreaChange}
        areaval={areaval}
        handleAreaValChange={handleAreaValChange}
      />
    </>
  );
};

export default GetArea;
