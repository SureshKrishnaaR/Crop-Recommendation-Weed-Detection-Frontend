//built in modules
import React from "react";

//common components
import Dropdown from "../../../../../../Components/Dropdown";

const StateView = ({ profiledetails, handleChange, states }) => {
  return (
    <>
      <Dropdown
        label="State"
        value={profiledetails["state_name"]}
        handleChange={handleChange}
        options={states}
        id="state_name"
        name="state_name"
      />
    </>
  );
};

export default StateView;
