import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./my-style.css";
import App from "./App";
// Mengimport Store untuk digunakan pada react-app
import Store from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Menghubungkan redux dengan app react */}
    <Store>
      <App />
    </Store>
  </React.StrictMode>
);
