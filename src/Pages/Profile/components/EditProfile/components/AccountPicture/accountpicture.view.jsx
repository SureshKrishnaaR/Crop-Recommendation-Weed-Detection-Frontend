import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, shallowEqual } from "react-redux";

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
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  return (
    <>
      <Avatar
        src={userDetails && userDetails.profileUrl}
        style={{ textAlign: "center" }}
        className={classes.large}
      />
    </>
  );
};

export default AccountPictureView;
