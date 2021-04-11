import React from "react";
import AccountPictureView from "./accountpicture.view";

const AccountPicture = ({ profiledetails, handleChange }) => {
  return (
    <>
      <AccountPictureView
        profiledetails={profiledetails}
        handleChange={handleChange}
      />
    </>
  );
};

export default AccountPicture;
