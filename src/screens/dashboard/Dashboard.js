import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
export default function Dashboard() {
  return (
    <>
      <div className="nav_bg_color" id="wrapper">
        <Nav />
        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom">
            <Header />
          </div>
          <h5>Welcome to vibrophile admin panel</h5>
        </div>
      </div>
    </>
  );
}
