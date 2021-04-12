import React from "react";
import { Route, Switch } from "react-router-dom";
import EditProfile from "./pages/Profile/components/EditProfile";
import Profile from "./pages/Profile";
import Register from "./pages/LandingPage/components/Register/index";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CropRecommendation from "./pages/CropRecommendationHome/Components/CropRecommendation";
import WeedDetection from "./pages/WeedDetectionHome/components/WeedDetection";

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
          path="/cropRecommendation"
          component={CropRecommendation}
          exact
          strict
        />
        <Route path="/weedDetection" component={WeedDetection} exact strict />
      </Switch>
    </div>
  );
};

export default Routes;
