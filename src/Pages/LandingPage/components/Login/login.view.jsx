import React from "react";
import {
  form,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Paper,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";

//google-oauth
import GoogleLogin from "react-google-login";

//background image
import background from "../../../../utils/images/croplogin.jpg";

const LoginPageView = ({
  loginDetails,
  setLoginDetils,
  handleLoginDetails,
  handleSubmit,
  handleGoogleSignin,
}) => {
  //google oauth response handler
  const responseGoogle = (response) => {
    console.log(response);
    handleGoogleSignin(response.profileObj.email, response.googleId);
  };
  return (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
        background: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
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
                  <InputLabel>User Name</InputLabel>
                  <OutlinedInput
                    value={loginDetails.username}
                    id="username"
                    name="username"
                    onChange={handleLoginDetails}
                    labelWidth={85}
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
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    value={loginDetails.password}
                    id="password"
                    name="password"
                    onChange={handleLoginDetails}
                    labelWidth={75}
                    endAdornment={
                      <InputAdornment position="end">
                        <VpnKeyIcon style={{ color: "#777" }} />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              <Box mt={5}>
                <FormControl
                  style={{ width: "300px" }}
                  variant="outlined"
                  size="small"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleSubmit(loginDetails);
                    }}
                  >
                    Login
                  </Button>
                </FormControl>
              </Box>
              <Box mt={2}>
                <FormControl
                  style={{ width: "300px" }}
                  variant="outlined"
                  size="medium"
                >
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "green" }}
                  >
                    <Typography variant="body2">
                      Don't have an account? Register here
                    </Typography>
                  </Link>
                </FormControl>
              </Box>

              <Box mt={2}>
                <FormControl
                  style={{
                    height: "100%",
                    width: "75%",
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
    </Box>
  );
};

export default LoginPageView;
