import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element left-profile">
              <Link to="/home">
                <img
                  className=""
                  src="assets/logo/logo.jpeg"
                  alt="logo"
                  style={{ width: "139px", height: "80px", margin: "0px auto" }}
                />
              </Link>
              <NavLink to="/dashboard">
                <span className="block m-t-xs font-bold profile-title font-italic">
                  KEEPSI
                </span>
              </NavLink>
            </div>
            <div className="logo-element"></div>
          </li>
          <li>
            <NavLink to="/dashboard">
              <i className="fa fa-th-large"></i>
              <span className="nav-label">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/client-list">
              <i className="fa fa-users"></i>
              <span className="nav-label">Client List</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
