import React, { useState } from "react";
import LoginPageView from "./login.view";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleLoginDetails = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  return (
    <>
      <LoginPageView
        loginDetails={loginDetails}
        setLoginDetails={setLoginDetails}
        handleLoginDetails={handleLoginDetails}
      />
    </>
  );
};

export default Login;
