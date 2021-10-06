import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import reportWebVitals from "./components/reportWebVitals";
import AuthProvider from "./components/providers/AuthProvider";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Baloo 2"],
//   },
//   palette: {
//     primary: green,
//     // primary: {
//     //   main: "#ece7dd",
//     // },
//     secondary: {
//       main: "#e1533c",
//     },
//   },
// });

const theme = createTheme({
  palette: { primary: { main: green[500] }, secondary: { main: green[500] } },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
