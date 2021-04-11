import React, { useState } from "react";
import NavbarView from "./navbar.view.jsx";

const Navbar = () => {
  //states
  const [open, setOpen] = useState(false);

  //handlers

  const handleMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <NavbarView
        open={open}
        handleMenu={handleMenu}
        handleClose={handleClose}
      />
    </>
  );
};

export default Navbar;
