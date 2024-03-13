import "devextreme/dist/css/dx.light.css";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import "./App.css";
import Approuter from "./router/Approuter";
import store from "./redux/store/store";
import { getUsenameAndPasswordBase64 } from "./services/APIservices/API.tokenService";

const orangeTheme = createTheme({
  typography: {
    // Set the default font size for text inside TextField
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#E16120",
    },
  },
});

function App() {
  console.log(getUsenameAndPasswordBase64());
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={orangeTheme}>
          <Approuter />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
