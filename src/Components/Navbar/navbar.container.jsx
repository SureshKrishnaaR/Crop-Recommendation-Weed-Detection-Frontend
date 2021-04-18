import React, { useState, useRef, useEffect } from "react";
import NavbarView from "./navbar.view.jsx";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/ActionCreators/user.action";
import { getProfileDetails } from "../../utils/requests";

import BackDrop from "../BackDrop";
import SnackBar from "../SnackBar";

const Navbar = () => {
  // Const
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  //states
  const anchorRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfileDetails().then((userdetails) => {
        dispatch(
          addUserDetails({
            ...userdetails,
            profileUrl: localStorage.getItem("accountpicturesrc"),
          })
        );
      });
    }
  }, [location.pathname, dispatch]);

  //handlers
  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(addUserDetails(null));
    history.push("/");
    handleProfileOpen();
  };
  return (
    <>
      <BackDrop />
      <SnackBar />
      <NavbarView
        profileOpen={profileOpen}
        anchorRef={anchorRef}
        handleProfileOpen={handleProfileOpen}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Navbar;
