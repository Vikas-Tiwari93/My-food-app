import "devextreme/dist/css/dx.light.css";
import React from "react";
import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import { Provider, TypedUseSelectorHook } from "react-redux";
import "./App.css";
import Approuter from "./router/Approuter";
import store, { AppDispatch, RootState } from "./redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toast";

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

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={orangeTheme}>
          <Approuter />
        </ThemeProvider>
        <ToastContainer position="top-right" delay={1500} />
      </Provider>
    </div>
  );
}

export default App;
