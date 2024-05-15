import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Login/Login";
const PateinLayout = () => {
  return (
    <div>
      <div>
        <Login />
        <Outlet />
      </div>
    </div>
  );
};

export default PateinLayout;
