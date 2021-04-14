import React, { useState } from "react";
import RegisterPageView from "./register.view";
import { signUp } from "../../../../utils/requests";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addSuccessAlert,
  addFailureAlert,
} from "../../../../redux/ActionCreators/alert.action";
import {
  showBackDrop,
  hideBackDrop,
} from "../../../../redux/ActionCreators/backdrop.action";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [registerdetails, setRegisterDetails] = useState({
    username: "",
    password: "",
    full_name: "",
    confirmPassword: "",
  });
  const [registerdetailsErrors, setRegisterDetailsErrors] = useState({
    username: "",
    password: "",
    full_name: "",
    confirmPassword: "",
  });

  const handleRegistrationDetails = (event) => {
    const { name, value } = event.target;
    validate(event);
    setRegisterDetails({ ...registerdetails, [name]: value });
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
    } else if (name === "full_name") {
      const nameRegex = /^[a-zA-Z\-]+$/;
      if (!value.length) {
        error = "Name is required";
      } else if (!value.match(nameRegex)) {
        error = "Alphabets only allowed";
      }
    } else if (name === "password") {
      if (!value.length) {
        error = "Password is required";
      } else if (!value.match(/[a-z]/g)) {
        error = "At least 1 lowercase character.";
      } else if (!value.match(/[A-Z]/g)) {
        error = "At least 1 uppercase character.";
      } else if (!value.match(/[0-9]/g)) {
        error = "At least 1 digit.";
      } else if (!value.match(/[^a-zA-Z\d]/g)) {
        error = "At least 1 special character.";
      } else if (!value.length >= 8) {
        error = "Minimum 8 characters.";
      }
    } else if (name === "confirmPassword") {
      if (!value.length) {
        error = "Confirm Password is required.";
      } else if (!registerdetails.password.length) {
        error = "Password is empty.";
      } else if (value !== registerdetails.password) {
        error = "Password doesn't match.";
      }
    }
    setRegisterDetailsErrors({ ...registerdetailsErrors, [name]: error });
  };

  const handleGoogleSignin = (username, password, full_name) => {
    let registerobj = {
      username: username,
      password: password,
      confirmPassword: password,
      full_name: full_name,
    };
    handleSubmit(registerobj);
  };

  const handleSubmit = (registerobj) => {
    if (registerobj.confirmPassword === registerobj.password) {
      dispatch(showBackDrop());
      signUp(registerobj)
        .then((res) => {
          history.push("/");
          if (res.success) {
            dispatch(addSuccessAlert(res.message));
          } else {
            dispatch(addFailureAlert(res.message));
          }
          dispatch(hideBackDrop());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <RegisterPageView
        registerdetails={registerdetails}
        registerdetailsErrors={registerdetailsErrors}
        setRegisterDetails={setRegisterDetails}
        handleRegistrationDetails={handleRegistrationDetails}
        handleSubmit={handleSubmit}
        handleGoogleSignin={handleGoogleSignin}
      />
    </>
  );
};

export default Register;
