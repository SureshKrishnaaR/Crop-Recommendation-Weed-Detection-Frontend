import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  Box,
  Input,
  Button,
  Avatar,
} from "@material-ui/core";
import { useSelector, shallowEqual } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LandscapeIcon from "@material-ui/icons/Landscape";

//component imports
import EditProfile from "./components/EditProfile";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
    marginBottom: "10px",
  },
}));

const ProfileView = ({
  profiledetails,
  handleChange,
  editprofile,
  handleEditProfile,
}) => {
  const classes = useStyles();
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  return (
    <>
      {!editprofile ? (
        <>
          <Box p={2} style={{ textAlign: "right" }}>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                handleEditProfile(true);
              }}
            >
              Edit Profile
            </Button>
            <Box style={{ textAlign: "center" }}>
              <Avatar
                src={localStorage.getItem("accountpicturesrc")}
                style={{ textAlign: "center" }}
                className={classes.large}
              />
            </Box>
            <Box p={1}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12} md={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel>Full Name</InputLabel>
                    <Input
                      id="full_name"
                      name="full_name"
                      disabled
                      value={profiledetails["full_name"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <PersonIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel>Mobile</InputLabel>
                    <Input
                      id="mobile"
                      name="mobile"
                      disabled
                      value={profiledetails["mobile"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <PhoneAndroidIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                {userDetails && !userDetails.profileUrl && (
                  <>
                    <Grid item xs={12} md={6}>
                      <FormControl style={{ width: "100%" }}>
                        <InputLabel>Username</InputLabel>
                        <Input
                          id="username"
                          name="username"
                          disabled
                          value={profiledetails["username"]}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <AccountCircleIcon style={{ color: "#777" }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl style={{ width: "100%" }}>
                        <InputLabel>Password</InputLabel>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          disabled
                          value={profiledetails["password"]}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <VpnKeyIcon style={{ color: "#777" }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                  </>
                )}
                <Grid item xs={12} md={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel>State</InputLabel>
                    <Input
                      id="state_name"
                      name="state_name"
                      disabled
                      value={profiledetails["state_name"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <PersonIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel>District</InputLabel>
                    <Input
                      id="district_name"
                      name="district_name"
                      disabled
                      value={profiledetails["district_name"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <PersonIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel>Area</InputLabel>
                    <Input
                      id="area"
                      name="area"
                      type="number"
                      disabled
                      value={profiledetails["area"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <LandscapeIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel>Soil Type</InputLabel>
                    <Input
                      id="soil_type"
                      name="soil_type"
                      disabled
                      value={profiledetails["soil_type"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <PersonIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </>
      ) : (
        <EditProfile
          profiledetails={profiledetails}
          handleChange={handleChange}
          handleEditProfile={handleEditProfile}
        />
      )}
    </>
  );
};

export default ProfileView;
