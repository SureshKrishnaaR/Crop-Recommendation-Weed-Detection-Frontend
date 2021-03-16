//import required built in modules
import React from "react";
import { BrowserRouter } from "react-router-dom";

//import required component files
import Routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
