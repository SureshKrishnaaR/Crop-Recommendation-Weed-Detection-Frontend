import React from "react";
import {
  form,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Paper,
  Button,
  InputAdornment,
  Grid,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Link } from "react-router-dom";

//google-oauth
import GoogleLogin from "react-google-login";

//background image and logo
import background from "../../../../utils/images/cropregister.jpg";
import logo from "../../../../utils/images/croplogo.jpg";

const RegisterPageView = ({
  registerdetails,
  setRegisterDetails,
  handleRegistrationDetails,
  handleSubmit,
  handleGoogleSignin,
}) => {
  //google-oauth-response-handler
  const responseGoogle = (response) => {
    handleGoogleSignin(
      response.profileObj.email,
      response.googleId,
      response.profileObj.name
    );
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <img
          src={background}
          alt="crops"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        alignItems="center"
        direction="column"
        justify="space-between"
      >
        <div>
          <Grid container justify="center">
            <img src={logo} alt="logo" width={200} />
          </Grid>
          <Grid container justify="center">
            <Box
              mt={3}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper elevation={5}>
                <Box p={4}>
                  <form>
                    <Box my={2}>
                      <FormControl
                        style={{ width: "300px" }}
                        variant="outlined"
                        size="small"
                      >
                        <InputLabel>Enter Full Name</InputLabel>
                        <OutlinedInput
                          value={registerdetails.full_name}
                          id="full_name"
                          name="full_name"
                          onChange={handleRegistrationDetails}
                          labelWidth={120}
                          endAdornment={
                            <InputAdornment position="end">
                              <PermIdentityIcon style={{ color: "#777" }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>

                    <Box my={2}>
                      <FormControl
                        style={{ width: "300px" }}
                        variant="outlined"
                        size="small"
                      >
                        <InputLabel>Enter Username</InputLabel>
                        <OutlinedInput
                          value={registerdetails.username}
                          id="username"
                          name="username"
                          onChange={handleRegistrationDetails}
                          labelWidth={120}
                          endAdornment={
                            <InputAdornment position="end">
                              <AccountCircleIcon style={{ color: "#777" }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>

                    <Box my={2}>
                      <FormControl
                        style={{ width: "300px" }}
                        variant="outlined"
                        size="small"
                      >
                        <InputLabel>Enter Password</InputLabel>
                        <OutlinedInput
                          value={registerdetails.password}
                          id="password"
                          name="password"
                          onChange={handleRegistrationDetails}
                          labelWidth={120}
                          endAdornment={
                            <InputAdornment position="end">
                              <VpnKeyIcon style={{ color: "#777" }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box my={2}>
                      <FormControl
                        style={{ width: "300px" }}
                        variant="outlined"
                        size="small"
                      >
                        <InputLabel>Confirm Password</InputLabel>
                        <OutlinedInput
                          value={registerdetails.confirmPassword}
                          id="confirmPassword"
                          name="confirmPassword"
                          onChange={handleRegistrationDetails}
                          labelWidth={140}
                          endAdornment={
                            <InputAdornment position="end">
                              <VpnKeyIcon style={{ color: "#777" }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>

                    <Box mt={3}>
                      <FormControl
                        style={{ width: "300px" }}
                        variant="outlined"
                        size="small"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            handleSubmit(registerdetails);
                          }}
                        >
                          Register
                        </Button>
                      </FormControl>
                    </Box>
                    <Box mt={2}>
                      <FormControl
                        style={{
                          width: "300px",
                          textAlign: "center",
                        }}
                        variant="outlined"
                        size="small"
                      >
                        <Link
                          to="/"
                          style={{ color: "green", textDecoration: "none" }}
                        >
                          <Typography variant="body2">
                            Already have an account? Login here..!
                          </Typography>
                        </Link>
                      </FormControl>
                    </Box>
                    <Box
                      mt={3}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FormControl
                        style={{
                          height: "100%",
                          width: "75%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        variant="outlined"
                        size="small"
                      >
                        <GoogleLogin
                          clientId="61039600269-esn789gidvkp8nlv9itnu8c1pjd759q4.apps.googleusercontent.com"
                          buttonText="SIGN IN WITH GOOGLE"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </FormControl>
                    </Box>
                  </form>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterPageView;
