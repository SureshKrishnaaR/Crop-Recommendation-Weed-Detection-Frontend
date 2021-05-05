//built in modules
import React from "react";

//common components
import Dropdown from "../../../../../../Components/Dropdown";

const SoilTypeView = ({ profiledetails, handleChange, soil }) => {
  return (
    <div>
      <Dropdown
        label="Soil Type"
        value={profiledetails["soil_type"]}
        options={soil}
        handleChange={handleChange}
        id="soil_type"
        name="soil_type"
      />
    </div>
  );
};

export default SoilTypeView;
