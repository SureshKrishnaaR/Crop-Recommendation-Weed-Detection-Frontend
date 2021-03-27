import React, { useState } from "react";
import EditProfileView from "./editprofile.view";

const EditProfile = ({ profiledetails, handleChange, handleEditProfile }) => {
  //handlers
  const handleFormSubmit = () => {
    handleEditProfile(false);
  };

  return (
    <>
      <></>
      <EditProfileView
        profiledetails={profiledetails}
        handleChange={handleChange}
        handleEditProfile={handleEditProfile}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default EditProfile;
