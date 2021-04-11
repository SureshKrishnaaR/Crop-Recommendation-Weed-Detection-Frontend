import React from "react";
import Dropdown from "../../../../../../Components/Dropdown";

const DistrictView = ({ profiledetails, handleChange, districts }) => {
  return (
    <>
      <Dropdown
        value={profiledetails["district"]}
        handleChange={handleChange}
        options={districts}
        label="District"
        id="district"
        name="district"
      />
    </>
  );
};

export default DistrictView;
