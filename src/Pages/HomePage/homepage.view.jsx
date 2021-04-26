import React from "react";
import LiquidSwipe from "../../Components/LiquidSwipe";
import About from "../About";
import WeedDetectionHome from "../WeedDetectionHome";
import CropRecommendationHome from "../CropRecommendationHome";

const HomePageView = () => {
  return (
    <>
      <div style={{ maxWidth: "100vw", maxHeight: "100vh" }}>
        <LiquidSwipe
          components={[
            <CropRecommendationHome />,
            <WeedDetectionHome />,
            <About />,
          ]}
          colors={["#9ACD32", "white", "black"]}
        />
      </div>
    </>
  );
};

export default HomePageView;
