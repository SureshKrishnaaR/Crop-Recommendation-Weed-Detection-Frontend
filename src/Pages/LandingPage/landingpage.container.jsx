import React from "react";
import LandingPageView from "./landingpage.view";
import background from "../../images/croplogin.jpg";

const LandingPage = () => {
  return (
    <>
      <div
        className="App"
        style={{
          height: "100vh",
          background: `url(${background})`,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <LandingPageView />
      </div>
    </>
  );
};

export default LandingPage;
