import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { app } from "../src/config/firebase";
import { FirebaseContext, Context } from "./store/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={{ app }}>
        <Context>
          <App />
        </Context>
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
