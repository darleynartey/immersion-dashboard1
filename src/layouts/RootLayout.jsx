import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="flex flex-col w-full px-16 ml-60">
      <Outlet />
      </div>
   
    </div>
  );
};

export default RootLayout;
