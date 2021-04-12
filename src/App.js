//import required built in modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

//import required component files
import Routes from "./Routes";
import "./App.css";
import Navbar from "./Components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: green,
  },
});

const App = () => {
  const mediatheme = useTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
