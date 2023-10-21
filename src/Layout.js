import React from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widget from "./widget/Widget";
import Login from "./authentication/login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./slices/UserSlice";

function Layout() {
  const user =  useSelector(selectUser);
  console.log("user",user);
  return (
    <>
    {
      !user ? (<Login />) :
    (
      <div className="app-wrapper">
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    )}
    </>
  );
}

export default Layout;
