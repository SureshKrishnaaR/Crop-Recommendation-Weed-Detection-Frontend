import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Routes from "./routes";
import "./App.css";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes /> */}
      <LandingPage />
    </BrowserRouter>
  );
};

export default App;
