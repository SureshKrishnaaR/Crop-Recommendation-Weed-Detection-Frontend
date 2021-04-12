import React from "react";
import { Route, Switch } from "react-router-dom";
import EditProfile from "./Pages/Profile/components/EditProfile";
import Profile from "./Pages/Profile";
import Register from "./Pages/LandingPage/components/Register/index";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import CropRecommendation from "./Pages/CropRecommendationHome/Components/CropRecommendation";

const Routes = () => {
  return (
    <div style={{ height: "calc(100vh - 65px)" }}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={Register} exact strict />
        <Route path="/home" component={HomePage} exact strict />
        <Route path="/profile" component={Profile} exact strict />
        <Route path="/editprofile" component={EditProfile} exact strict />
        <Route
          path="/home/cropRecommendation"
          component={CropRecommendation}
          exact
          strict
        />
      </Switch>
    </div>
  );
};

export default Routes;
