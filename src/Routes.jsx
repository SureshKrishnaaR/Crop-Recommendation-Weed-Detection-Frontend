import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import EditProfile from "./pages/Profile/components/EditProfile";
import Profile from "./pages/Profile";
import Register from "./pages/LandingPage/components/Register/index";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CropRecommendation from "./pages/CropRecommendationHome/components/CropRecommendation";
import WeedDetection from "./pages/WeedDetectionHome/components/WeedDetection";

const PrivateRoute = ({ children, component: Component, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
const NormalRoute = ({ children, component: Component, ...rest }) => {
  const isLoggedIn = !localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

const Routes = () => {
  return (
    <div style={{ height: "calc(100vh - 65px)" }}>
      <Switch>
        <NormalRoute exact path="/" component={LandingPage} />
        <NormalRoute path="/register" component={Register} exact strict />
        <PrivateRoute path="/home" component={HomePage} exact strict />
        <PrivateRoute path="/profile" component={Profile} exact strict />
        <PrivateRoute
          path="/editprofile"
          component={EditProfile}
          exact
          strict
        />
        <PrivateRoute
          path="/cropRecommendation"
          component={CropRecommendation}
          exact
          strict
        />
        <PrivateRoute
          path="/weedDetection"
          component={WeedDetection}
          exact
          strict
        />
      </Switch>
    </div>
  );
};

export default Routes;
