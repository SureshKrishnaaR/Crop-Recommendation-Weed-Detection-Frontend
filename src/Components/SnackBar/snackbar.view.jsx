import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackbarView = ({ open, handleClose, alertDetails }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={
              alertDetails.isSucessful
                ? "success"
                : alertDetails.isError
                ? "error"
                : alertDetails.isInfo
                ? "info"
                : "warning"
            }
          >
            {alertDetails.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};
export default SnackbarView;
