import React from "react";
import DropdownView from "./dropdown.view";

const Dropdown = ({
  id,
  value,
  name,
  handleChange,
  options,
  label,
  style,
  variant,
}) => {
  return (
    <>
      <DropdownView
        id={id}
        value={value}
        name={name}
        handleChange={handleChange}
        options={options}
        label={label}
        style={style}
        variant={variant}
      />
    </>
  );
};

export default Dropdown;
