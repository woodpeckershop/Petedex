
import React, { useState, useContext } from 'react';
import './login.scss';
import { authContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

function Login() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setpasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [phoneReg, setPhoneReg] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, register, user_name } = useContext(authContext);
  console.log('loginininininin', user_name);

  const onSubmit = function (event) {
    event.preventDefault();
    if (email) login(email, password);
  };

  return (
    <div>
      <h1>{user_name}</h1>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Sign up</h1>
          <label>Username</label>
          <input
            type='text'
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          ></input>
          <label>Email</label>
          <input
            type='email'
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          ></input>
          <label>Phone</label>
          <input
            type='phonenumber'
            onChange={(e) => {
              setPhoneReg(e.target.value);
            }}
          ></input>
          <label>Password</label>
          <input
            type='password'
            onChange={(e) => {
              setpasswordReg(e.target.value);
            }}
          ></input>
          <button
            onClick={() =>
              register(usernameReg, passwordReg, emailReg, phoneReg)
            }
          >
            Register
          </button>
        </div>
      </form>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Login</h1>
          <label>Email</label>
          <input
            type='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label>Password</label>
          <input
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <Link onClick={()=>login(email, password)} to='/Mystore'> 

            <button>Login</button>
          </Link>        
          </div>
      </form>
    </div>
  );
}

export default Login;
