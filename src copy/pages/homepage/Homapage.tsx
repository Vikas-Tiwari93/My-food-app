import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/pageComponents/homepageComponents/navbar/Navbar";
import Sidebar from "../../components/pageComponents/homepageComponents/sidebar/Sidebar";

import "./home.style.css";
import { useState } from "react";

export default function Homapage() {
  const location= useLocation() 
  const [userType, setUserType] = useState("chef");
 
  return (
    <div className="home-root">
      {userType === "chef" ? (
        <Navigate to={location.pathname || "/homepage/chef/recepies/"} />
      ) : (
        <Navigate to={location.pathname || "/homepage/profile"} />
      )}
      <Sidebar />
      <div className="home-main">
        <Navbar />

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
