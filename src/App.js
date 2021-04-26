//import required built in modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureReducer } from "./redux/configureReducer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
  const store = configureReducer();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
