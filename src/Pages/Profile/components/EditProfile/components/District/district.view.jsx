import React from "react";
import Dropdown from "../../../../../../Components/Dropdown";

const DistrictView = ({ profiledetails, handleChange, districts }) => {
  return (
    <>
      <Dropdown
        value={profiledetails["district_name"]}
        handleChange={handleChange}
        options={districts}
        label="District"
        id="district_name"
        name="district_name"
      />
    </>
  );
};

export default DistrictView;
