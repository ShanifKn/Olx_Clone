import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { app } from "../src/config/firebase";
import { FirebaseContext, Context } from "./store/Context";
import Post from "./store/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Post>
        <FirebaseContext.Provider value={{ app }}>
          <Context>
            <App />
          </Context>
        </FirebaseContext.Provider>
      </Post>
    </BrowserRouter>
  </React.StrictMode>
);
