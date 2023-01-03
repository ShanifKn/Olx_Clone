/* eslint-disable jsx-a11y/alt-text */
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
import Logo from "../../olx-logo.png";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const Navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const register = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: username });
      await addDoc(collection(db, "users"), {
        id: user.uid,
        username: username,
        phone: phone,
      }).then(() => {
        Navigate("/login");
      });
    } catch (err) {
      MySwal.fire({
        MySwal: true,
        timer: 3000,
        timerProgressBar: true,
        position: "top-end",
        showConfirmButton: false,
        title: "Please enter your Credential",
      });
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={register}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(event) => {
              setPhone(event.target.value);
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
              setPassword(event.target.value);
            }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
