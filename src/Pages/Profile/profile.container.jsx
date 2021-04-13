import React, { useState, useEffect } from "react";
import ProfileView from "./profile.view";
import { getProfileDetails } from "../../utils/requests";

const Profile = () => {
  //states
  const [profiledetails, setProfileDetails] = useState({
    full_name: "",
    username: "",
    password: "",
    mobile: "",
    state_name: "",
    district_name: "",
    area: null,
    soil_type: "",
  });
  const [editprofile, setEditProfile] = useState(false);

  //useeffect
  useEffect(() => {
    getProfileDetails()
      .then((res) => {
        setProfileDetails(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //handlers
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(profiledetails);
    setProfileDetails({
      ...profiledetails,
      [name]: value,
    });
  };

  const handleEditProfile = (val) => {
    setEditProfile(val);
  };

  return (
    <>
      <ProfileView
        profiledetails={profiledetails}
        handleChange={handleChange}
        editprofile={editprofile}
        handleEditProfile={handleEditProfile}
      />
    </>
  );
};

export default Profile;
