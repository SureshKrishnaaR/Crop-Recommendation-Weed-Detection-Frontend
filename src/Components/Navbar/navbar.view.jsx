import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, NavLink } from "react-router-dom";
import {
  Popper,
  Paper,
  DialogTitle,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    fontWeight: "bold",
  },
  paper: {
    maxWidth: 400,
    overflow: "auto",
  },
  popper: {
    zIndex: 1,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
  },
}));

const NavbarView = ({
  profileOpen,
  anchorRef,
  handleProfileOpen,
  handleLogout,
}) => {
  //constants
  const history = useHistory();
  const classes = useStyles();
  const [arrowRef, setArrowRef] = useState(null);
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              component={NavLink}
              to="/home"
              variant="h6"
              className={classes.title}
              color="textSecondary"
            >
              AGRI ASSISTANCE
            </Typography>
            <div>
              <Button
                color="inherit"
                ref={anchorRef}
                onClick={() => handleProfileOpen()}
                disableRipple
              >
                <Avatar
                  variant="rounded"
                  src={localStorage.getItem("accountpicturesrc")}
                />
              </Button>
              <Popper
                className={classes.popper}
                open={profileOpen}
                anchorEl={anchorRef.current}
                placement="bottom"
                disablePortal={false}
                modifiers={{
                  flip: {
                    enabled: true,
                  },
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: "scrollParent",
                  },
                  arrow: {
                    enabled: true,
                    element: arrowRef,
                  },
                }}
              >
                <span className={classes.arrow} ref={setArrowRef} />
                <Paper className={classes.paper}>
                  <DialogTitle>{"Anonymous"}</DialogTitle>
                  <List>
                    <ListItem
                      dense
                      component={Button}
                      color="primary"
                      onClick={() => {
                        history.push("/profile");
                        handleProfileOpen();
                      }}
                    >
                      <ListItemIcon>
                        <PersonIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Profile"
                        style={{ textTransform: "none" }}
                      />
                    </ListItem>
                    <ListItem
                      dense
                      component={Button}
                      color="primary"
                      onClick={() => handleLogout()}
                    >
                      <ListItemIcon>
                        <ExitToAppIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Logout"
                        style={{ textTransform: "none" }}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Popper>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavbarView;
