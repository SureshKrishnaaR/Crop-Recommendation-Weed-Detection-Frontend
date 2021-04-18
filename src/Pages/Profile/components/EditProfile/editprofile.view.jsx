import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Box,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LandscapeIcon from "@material-ui/icons/Landscape";
import { useSelector, shallowEqual } from "react-redux";

//component imports
import AccountPicture from "./components/AccountPicture";
import SoilType from "./components/SoilType";
import State from "./components/State";
import District from "./components/District";

const EditProfileView = ({
  profiledetails,
  handleChange,
  handleEditProfile,
  handleFormSubmit,
}) => {
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  return (
    <div style={{ overflow: "hidden" }}>
      <Box p={2} style={{ textAlign: "right" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleEditProfile(false)}
        >
          CANCEL
        </Button>
        <Box style={{ textAlign: "center" }}>
          <AccountPicture
            profiledetails={profiledetails}
            handleChange={handleChange}
          />
        </Box>
      </Box>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl
              style={{ width: "100%" }}
              variant="outlined"
              size="small"
            >
              <InputLabel>Full Name</InputLabel>
              <OutlinedInput
                id="full_name"
                name="full_name"
                value={profiledetails["full_name"]}
                onChange={handleChange}
                labelWidth={75}
                endAdornment={
                  <InputAdornment position="end">
                    <PersonIcon style={{ color: "#777" }} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              style={{ width: "100%" }}
              variant="outlined"
              size="small"
            >
              <InputLabel>Mobile</InputLabel>
              <OutlinedInput
                id="mobile"
                name="mobile"
                value={profiledetails["mobile"]}
                onChange={handleChange}
                labelWidth={47}
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
                <FormControl
                  style={{ width: "100%" }}
                  variant="outlined"
                  size="small"
                >
                  <InputLabel>Username</InputLabel>
                  <OutlinedInput
                    id="username"
                    name="username"
                    value={profiledetails["username"]}
                    onChange={handleChange}
                    labelWidth={75}
                    endAdornment={
                      <InputAdornment position="end">
                        <AccountCircleIcon style={{ color: "#777" }} />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </>
          )}
          <Grid item xs={12} md={6}>
            <State
              profiledetails={profiledetails}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <District
              profiledetails={profiledetails}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              style={{ width: "100%" }}
              variant="outlined"
              size="small"
            >
              <InputLabel>Area</InputLabel>
              <OutlinedInput
                id="area"
                name="area"
                value={profiledetails["area"]}
                onChange={handleChange}
                labelWidth={30}
                endAdornment={
                  <InputAdornment position="end">
                    <LandscapeIcon style={{ color: "#777" }} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <SoilType
              profiledetails={profiledetails}
              handleChange={handleChange}
            />
          </Grid>
          <Grid container item justify="center" xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFormSubmit}
            >
              UPDATE PROFILE
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default EditProfileView;
