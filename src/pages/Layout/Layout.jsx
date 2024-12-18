import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";
import Header from "../../Component/Header";

export default function Layout() {
  return (
    <div className="layout-section">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-2 text-white p-0">
            <div className="sidebar_wrapper">
              <Sidebar />
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-12 col-sm-12 col-md-10">
            <div className="header-main bg-dark">
              <Header />
            </div>

            {/* Dynamic Content Rendered via Routes */}
            <div className="content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
