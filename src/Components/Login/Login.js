/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Logo from "../../olx-logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const Navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
        () => {
          Navigate("/");
        }
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={login}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/Signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
