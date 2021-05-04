//built in modules
import React from "react";

//common component imports
import LiquidSwipe from "../../Components/LiquidSwipe";

//component files
import About from "../About";
import WeedDetectionHome from "../WeedDetectionHome";
import CropRecommendationHome from "../CropRecommendationHome";

const HomePageView = () => {
  return (
    <>
      <div style={{ maxWidth: "100vw", maxHeight: "100vh" }}>
        {/* Add three components under LiquidSwipe */}
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
