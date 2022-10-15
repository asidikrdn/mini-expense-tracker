import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./my-style.css";
import App from "./App";
// Mengimport react-redux dan store agar bisa menghubungkan redux dengan app react
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Menghubungkan redux dengan app react */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
