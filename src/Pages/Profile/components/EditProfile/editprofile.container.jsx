import React from "react";
import EditProfileView from "./editprofile.view";
import { updateProfile } from "../../../../utils/requests";
const EditProfile = ({ profiledetails, handleChange, handleEditProfile }) => {
  //handlers
  const handleFormSubmit = () => {
    updateProfile(profiledetails).then((data) => {
      console.log(data.message);
      handleEditProfile(false);
    });
  };

  return (
    <>
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
