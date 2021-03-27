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
    state: "",
    district: "",
    area: 0.0,
    soil_type: "",
    accountpicturesrc: "",
  });
  const [editprofile, setEditProfile] = useState(false);

  //useeffect
  useEffect(() => {
    getProfileDetails()
      .then((res) => {
        console.log("printttttt");
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
