import React, { useState } from "react";
import RegisterPageView from "./register.view";

const Register = () => {
  const [registerdetails, setRegisterDetails] = useState({
    username: "",
    password: "",
    fullname: "",
    confirmPassword: "",
  });

  const handleRegistrationDetails = (event) => {
    const { name, value } = event.target;
    setRegisterDetails({ ...registerdetails, [name]: value });
  };
  return (
    <>
      <RegisterPageView
        registerdetails={registerdetails}
        setRegisterDetails={setRegisterDetails}
        handleRegistrationDetails={handleRegistrationDetails}
      />
    </>
  );
};

export default Register;
