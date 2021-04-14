import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import SnackbarView from "./snackbar.view";

const Snackbar = () => {
  //Const
  const alertDetails = useSelector(
    ({ alertDetails }) => alertDetails,
    shallowEqual
  );
  //States
  const [open, setOpen] = useState(false);
  //
  useEffect(() => {
    if (
      alertDetails.isError ||
      alertDetails.isSucessful ||
      alertDetails.isInfo ||
      alertDetails.isWarning
    ) {
      setOpen(true);
    }
  }, [alertDetails]);
  //Event Handlers
  const handleClose = (event) => {
    setOpen(false);
  };
  return (
    <>
      <SnackbarView
        open={open}
        handleClose={handleClose}
        alertDetails={alertDetails}
      />
    </>
  );
};
export default Snackbar;
