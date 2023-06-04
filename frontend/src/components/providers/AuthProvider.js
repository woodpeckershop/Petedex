import { createContext, useState } from "react";

import Axios from "axios";

// import uuid from "react-uuid";

export const authContext = createContext();

export default function AuthProvider(props) {
  const [user_name, setUserName] = useState('');
  const [user_id, setUserId] = useState();

  // Perform login process for the user & save authID, etc
  const login = (email, password) => {
    Axios.put(`http://localhost:8080/api/users/login`, {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.error) {
        window.alert(response.data.error);
      } else {
        setUserName(response.data[0].name);
        setUserId(response.data[0].id);
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
        setUserName([response.data.error]);
      } else {
        setUserName([response.data[0]]);
      }
    });
  };

  const logout = function (email, password, setUser, setAuth) {
    setUser({ email: "", name: "" });
    setAuth(false);
  };

  // authContext will expose these items
  const userData = { user_id, login, register, logout, user_name };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
}
