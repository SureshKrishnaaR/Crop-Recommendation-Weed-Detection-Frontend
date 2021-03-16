import React from "react";
import { Route, Switch } from "react-router-dom";
// import Home from "./Components/home.jsx";
// import About from "./Components/about.jsx";
// import Contact from "./Components/contact.jsx";
import Register from "./Pages/LandingPage/components/Register/index";
import LandingPage from "./Pages/LandingPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={Register} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
    </>
  );
};

export default Routes;
