import React from "react";
import GuideMapView from "./guideMap.view";

const GuideMap = ({ progress, approach }) => {
  return (
    <>
      <GuideMapView progress={progress} approach={approach} />
    </>
  );
};

export default GuideMap;
