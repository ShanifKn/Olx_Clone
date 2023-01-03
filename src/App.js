import React, { useEffect, useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import { AuthContext } from "./store/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
