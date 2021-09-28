import { Button } from "@mui/material";
import React, { useState } from "react";
import "./login.scss";
import Axios from "axios";
import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

function Login() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { login, register } = useContext(authContext);
  const { login, register, loginStatus } = useContext(authContext);
  console.log("loginininininin", loginStatus);
  // const register = () => {
  //   Axios.put(`http://localhost:8080/api/users/signup`, {
  //     username: usernameReg,
  //     email: emailReg,
  //     phone: phoneReg,
  //     password: passwordReg,
  //   }).then((response) => {
  //     console.log(response.data);
  //   });
  // };

  // const login = () => {
  //   Axios.put(`http://localhost:8080/api/users/login`, {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.error) {
  //       setloginStatus(response.data.error);
  //     } else {
  //       setloginStatus(response.data[0].name);
  //     }
  //   });
  // };

  const onSubmit = function (event) {
    event.preventDefault();
    if (email) login(email, password);
  };

  return (
    <div>
      <h1>{loginStatus}</h1>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Sign up</h1>
          <label>Username</label>
          <input
            type="text"
            onUsernameChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          ></input>
          <label>Email</label>
          <input
            type="email"
            onEmailChange={(e) => {
              setEmailReg(e.target.value);
            }}
          ></input>
          <label>Phone</label>
          <input
            type="phonenumber"
            onChange={(e) => {
              setPhoneReg(e.target.value);
            }}
          ></input>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setpasswordReg(e.target.value);
            }}
          ></input>
          <button onClick={register}>Register</button>
        </div>
      </form>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Login</h1>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <Link to="/2/Mystore">
            <button onClick={() => login(email, password)}>Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
