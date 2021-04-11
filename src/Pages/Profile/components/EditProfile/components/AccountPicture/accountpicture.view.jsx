import React from "react";
import { Box, Avatar } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
    marginBottom: "10px",
  },
}));

const AccountPictureView = ({ profiledetails, handleChange }) => {
  const classes = useStyles();
  return (
    <>
      <Box m={5} style={{ textAlign: "center" }}>
        <Box style={{ textAlign: "center" }}>
          <Avatar
            src={localStorage.getItem("accountpicturesrc")}
            style={{ textAlign: "center" }}
            className={classes.large}
          />
        </Box>

        <Box>
          <input
            style={{ display: "none" }}
            accept="image/*"
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <PhotoCamera />
          </label>
        </Box>
      </Box>
    </>
  );
};

export default AccountPictureView;
