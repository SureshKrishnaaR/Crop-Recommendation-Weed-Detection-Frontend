import React from "react";
import Dropdown from "../../../../../../Components/Dropdown";

const StateView = ({ profiledetails, handleChange, states }) => {
  return (
    <>
      <Dropdown
        label="State"
        handleChange={handleChange}
        options={states}
        id="state"
        name="state"
      />
    </>
  );
};

export default StateView;
