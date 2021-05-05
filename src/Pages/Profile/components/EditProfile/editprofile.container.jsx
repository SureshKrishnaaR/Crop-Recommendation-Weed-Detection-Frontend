//built in modules
import React from "react";
import { useDispatch } from "react-redux";

//component files
import EditProfileView from "./editprofile.view";

//import requests
import { updateProfile } from "../../../../utils/requests";

//redux imports
import {
  addSuccessAlert,
  addFailureAlert,
} from "../../../../redux/ActionCreators/alert.action";

const EditProfile = ({ profiledetails, handleChange, handleEditProfile }) => {
  const dispatch = useDispatch();

  //handlers
  const handleFormSubmit = () => {
    updateProfile(profiledetails)
      .then((data) => {
        dispatch(addSuccessAlert(data.message));
        handleEditProfile(false);
      })
      .catch((error) => {
        dispatch(addFailureAlert(error.response.data.message));
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
