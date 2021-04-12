import React from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  makeStyles,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    menuPaper: {
      maxHeight: 200,
    },
  })
);

const DropdownView = ({
  id,
  value,
  name,
  handleChange,
  options,
  label,
  style,
  variant,
}) => {
  const classes = useStyles();
  variant = variant || "outlined";

  return (
    <FormControl
      variant={variant}
      size="small"
      style={style || { minWidth: "100%" }}
    >
      {label && (
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      )}
      <Select
        labelId="demo-simple-select-outlined-label"
        id={id || "demo-simple-select-outlined"}
        value={value}
        onChange={handleChange}
        name={name}
        label={label}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
          classes: { paper: classes.menuPaper },
        }}
      >
        {options.map((value, index) => {
          if (value instanceof Array) {
            return (
              <MenuItem key={index} dense selected value={value[0]}>
                {value[1]}
              </MenuItem>
            );
          } else {
            return (
              <MenuItem key={index} dense selected value={value}>
                {value}
              </MenuItem>
            );
          }
        })}
      </Select>
    </FormControl>
  );
};

export default DropdownView;
