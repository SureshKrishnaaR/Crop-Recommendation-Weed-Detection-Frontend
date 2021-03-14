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

const LoginPageView = ({
  loginDetails,
  setLoginDetils,
  handleLoginDetails,
}) => {
  return (
    <>
      <Paper elevation={5}>
        <Box p={4}>
          <form>
            <Box my={2}>
              <FormControl
                style={{ width: "250px" }}
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
                style={{ width: "250px" }}
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
            <Box mt={2}>
              <FormControl
                style={{ width: "250px", textAlign: "right" }}
                variant="outlined"
                size="medium"
              >
                <Typography variant="body2" style={{ color: "red" }}>
                  Forgot Password?
                </Typography>
              </FormControl>
            </Box>

            <Box mt={5}>
              <FormControl
                style={{ width: "250px" }}
                variant="outlined"
                size="small"
              >
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </FormControl>
            </Box>
          </form>
        </Box>
      </Paper>
    </>
  );
};

export default LoginPageView;
