import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import BackDropView from "./backdrop.view";

const BackDrop = () => {
  //Const
  const backDropDetails = useSelector(
    (state) => state.backDropDetails,
    shallowEqual
  );
  //States
  const [open, setOpen] = useState(false);
  //useEffect
  useEffect(() => {
    if (backDropDetails.showBackdrop) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [backDropDetails]);

  return (
    <>
      <BackDropView open={open} />
    </>
  );
};
export default BackDrop;
