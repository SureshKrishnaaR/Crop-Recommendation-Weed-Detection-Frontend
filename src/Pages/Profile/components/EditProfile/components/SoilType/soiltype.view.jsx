import React from "react";
import Dropdown from "../../../../../../Components/Dropdown";

const SoilTypeView = ({ profiledetails, handleChange, soil }) => {
  return (
    <div>
      <Dropdown
        label="Soil Type"
        options={soil}
        handleChange={handleChange}
        id="soil_type"
        name="soil_type"
      />
    </div>
  );
};

export default SoilTypeView;
