import React, { useState } from "react";
import RegisterPageView from "./register.view";
import { signUp } from "../../../../utils/requests";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [registerdetails, setRegisterDetails] = useState({
    username: "",
    password: "",
    full_name: "",
    confirmPassword: "",
  });

  const handleRegistrationDetails = (event) => {
    const { name, value } = event.target;
    setRegisterDetails({ ...registerdetails, [name]: value });
  };

  const handleGoogleSignin = (username, password, full_name) => {
    let registerobj = {
      username: username,
      password: password,
      confirmPassword: password,
      full_name: full_name,
    };
    setRegisterDetails(registerobj);
    handleSubmit(registerobj);
  };

  const handleSubmit = (registerobj) => {
    signUp(registerobj)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <RegisterPageView
        registerdetails={registerdetails}
        setRegisterDetails={setRegisterDetails}
        handleRegistrationDetails={handleRegistrationDetails}
        handleSubmit={handleSubmit}
        handleGoogleSignin={handleGoogleSignin}
      />
    </>
  );
};

export default Register;
