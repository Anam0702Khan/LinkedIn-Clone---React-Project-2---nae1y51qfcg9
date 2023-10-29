import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Register from "./authentication/register/Register";
import Feed from "./feed/Feed";
import { Login } from "@mui/icons-material";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout />
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
