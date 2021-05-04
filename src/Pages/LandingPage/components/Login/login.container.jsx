//built in modules
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

//component files
import LoginPageView from "./login.view";

//redux imports
import { addUserToken } from "../../../../redux/ActionCreators/user.action";
import {
  addSuccessAlert,
  addFailureAlert,
} from "../../../../redux/ActionCreators/alert.action";
import {
  showBackDrop,
  hideBackDrop,
} from "../../../../redux/ActionCreators/backdrop.action";

//requests
import { login } from "../../../../utils/requests";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //states
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [loginDetailsErrors, setLoginDetailsErrors] = useState({
    username: "",
    password: "",
  });

  //handlers
  const handleLoginDetails = (event) => {
    const { name, value } = event.target;
    validate(event);
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const validate = (event) => {
    const { name, value } = event.target;
    let error = "";
    if (name === "username") {
      const userNameRegex = /^[a-zA-Z0-9]+$/;
      if (!value.length) {
        error = "Username is required";
      } else if (!value.match(userNameRegex)) {
        error = "Alphanumeric characters only allowed";
      }
    } else if (name === "password") {
      if (
        !value.match(/[a-z]/g) ||
        !value.match(/[A-Z]/g) ||
        !value.match(/[0-9]/g) ||
        !value.match(/[^a-zA-Z\d]/g)
      ) {
        error = "Invalid Password.";
      } else if (!value.length >= 8) {
        error = "Minimum 8 characters.";
      }
    }
    setLoginDetailsErrors({ ...loginDetailsErrors, [name]: error });
  };

  const handleGoogleSignin = (username, password, full_name) => {
    let loginobj = {
      username: username,
      password: password,
    };
    handleSubmit(loginobj);
  };

  const handleSubmit = (logindetails) => {
    dispatch(showBackDrop());
    login(logindetails)
      .then((res) => {
        dispatch(addUserToken(res.token));
        dispatch(addSuccessAlert(res.message));
        dispatch(hideBackDrop());
        history.push("/home");
      })
      .catch((error) => {
        dispatch(hideBackDrop());
        dispatch(addFailureAlert(error.response.data.message));
      });
  };

  return (
    <>
      <LoginPageView
        loginDetails={loginDetails}
        loginDetailsErrors={loginDetailsErrors}
        setLoginDetails={setLoginDetails}
        handleLoginDetails={handleLoginDetails}
        handleSubmit={handleSubmit}
        handleGoogleSignin={handleGoogleSignin}
      />
    </>
  );
};

export default Login;
