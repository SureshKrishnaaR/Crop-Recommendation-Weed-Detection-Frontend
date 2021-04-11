import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import LoginPageView from "./login.view";

import { login } from "../../../../utils/requests";

const Login = () => {
  const history = useHistory();

  //states
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  //handlers
  const handleLoginDetails = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleGoogleSignin = (username, password, full_name) => {
    let loginobj = {
      username: username,
      password: password,
    };
    handleSubmit(loginobj);
    setLoginDetails(loginobj);
  };

  const handleSubmit = (logindetails) => {
    login(logindetails)
      .then((res) => {
        console.log(res);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <LoginPageView
        loginDetails={loginDetails}
        setLoginDetails={setLoginDetails}
        handleLoginDetails={handleLoginDetails}
        handleSubmit={handleSubmit}
        handleGoogleSignin={handleGoogleSignin}
      />
    </>
  );
};

export default Login;
