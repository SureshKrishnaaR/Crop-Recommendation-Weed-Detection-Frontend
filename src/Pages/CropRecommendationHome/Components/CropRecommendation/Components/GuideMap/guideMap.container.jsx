//built in modules
import React from "react";

//component files
import GuideMapView from "./guideMap.view";

const GuideMap = ({ progress, approach }) => {
  return (
    <>
      <GuideMapView progress={progress} approach={approach} />
    </>
  );
};

export default GuideMap;
