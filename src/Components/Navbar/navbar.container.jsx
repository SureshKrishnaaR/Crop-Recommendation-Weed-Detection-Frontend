import React, { useState, useRef } from "react";
import NavbarView from "./navbar.view.jsx";
import { useHistory } from "react-router-dom";

import BackDrop from "../BackDrop";
import SnackBar from "../SnackBar";

const Navbar = () => {
  // Const
  const history = useHistory();
  //states
  const anchorRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);

  //handlers
  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };
  const handleLogout = () => {
    localStorage.clear();
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
