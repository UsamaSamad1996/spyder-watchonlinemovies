import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserbackProvider } from "@userback/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserbackProvider token="42104|85868|E4hzckSnrKeftnjWa2tYRtVbr">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserbackProvider>
  </React.StrictMode>
);
