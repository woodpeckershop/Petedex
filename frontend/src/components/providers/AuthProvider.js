import { createContext, useState } from "react";
import Axios from "axios";

// import uuid from "react-uuid";

export const authContext = createContext();

export default function AuthProvider(props) {
  // const [auth, setAuth] = useState(false);
  // const [user, setUser] = useState({ email: "", name: "", id: "" });
  // const [usernameReg, setUsernameReg] = useState("");
  // const [passwordReg, setpasswordReg] = useState("");
  // const [emailReg, setEmailReg] = useState("");
  // const [phoneReg, setPhoneReg] = useState("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [loginStatus, setloginStatus] = useState("");

  // Perform login process for the user & save authID, etc
  const login = (email, password) => {
    Axios.put(`http://localhost:8080/api/users/login`, {
      email: email,
      password: password,
    }).then((response) => {
      console.log("ressssssssss", response);
      if (response.data.error) {
        setloginStatus(response.data.error);
      } else {
        setloginStatus(response.data[0].name);
      }
    });
  };

  const register = (usernameReg, emailReg, phoneReg, passwordReg) => {
    Axios.put(`http://localhost:8080/api/users/signup`, {
      username: usernameReg,
      email: emailReg,
      phone: phoneReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.error) {
        setloginStatus(response.data.error);
      } else {
        setloginStatus(response.data[0].name);
      }
    });
  };

  const logout = function (email, password, setUser, setAuth) {
    setUser({ email: "", name: "" });
    setAuth(false);
  };

  const test = 1;
  // authContext will expose these items
  const userData = { test, login, register, logout, loginStatus };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
}
