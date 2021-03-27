import React from "react";
import { Route, Switch } from "react-router-dom";
import EditProfile from "./Pages/Profile/components/EditProfile";
import Profile from "./Pages/Profile";
import Register from "./Pages/LandingPage/components/Register/index";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/editprofile" component={EditProfile} />
      </Switch>
    </>
  );
};

export default Routes;
