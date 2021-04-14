import React from "react";
import { Box, Avatar } from "@material-ui/core";
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
      <Box m={5} style={{ textAlign: "center" }}>
        <Box style={{ textAlign: "center" }}>
          <Avatar
            src={userDetails && userDetails.profileUrl}
            style={{ textAlign: "center" }}
            className={classes.large}
          />
        </Box>
      </Box>
    </>
  );
};

export default AccountPictureView;
