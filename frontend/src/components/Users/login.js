import React, { useState, useContext } from "react";
import "./login.scss";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

function Login() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, register, user_name } = useContext(authContext);
  console.log("loginininininin", user_name);

  const onSubmit = function (event) {
    event.preventDefault();
    if (email) login(email, password);
  };

  return (
    <div id="container">
      <form onSubmit={onSubmit} title="Login">
        <div id="loginform">
          <h1 id="headerTitle">Login</h1>
          <div class="row">
            <label>Email</label>
            <input
              description="Username"
              placeholder="Enter your username"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div class="row">
            <label>Password</label>
            <input
              class="row"
              description="Password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>

          <Link onClick={() => login(email, password)} to="/Mystore">
            <div id="button" class="row">
              <button title="Log in">Login</button>
            </div>
          </Link>
        </div>
      </form>

      
      <form onSubmit={onSubmit} title="Login">
        <div id="loginform">
          <h1 id="headerTitle">Sign up</h1>
          <div class="row">
            <label>Username</label>
            <input
              description="Username"
              placeholder="Enter your username"
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            ></input>
          </div>

          <div class="row">
            <label>Email</label>
            <input
              description="email"
              placeholder="Enter your email"
              type="email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            ></input>
          </div>

          <div class="row">
            <label>Phone</label>
            <input
              description="phonenumber"
              placeholder="Enter your PhoneNumber"
              type="phonenumber"
              onChange={(e) => {
                setPhoneReg(e.target.value);
              }}
            ></input>
          </div>

          <div class="row">
            <label>Password</label>
            <input
              description="Password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => {
                setpasswordReg(e.target.value);
              }}
            ></input>
          </div>
          <div id="button" class="row">
            <button
              title="Log in"
              onClick={() =>
                register(usernameReg, passwordReg, emailReg, phoneReg)
              }
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
