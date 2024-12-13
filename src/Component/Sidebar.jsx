import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  // Sidebar links data
  const sidebarLinks = [
    { icon: "assets/icon/dashboards.png", text: "Dashboard", path: "/" },
    { icon: "assets/icon/productes.png", text: "Products", path: "products" },
    { icon: "assets/icon/oders.png", text: "Orders", path: "orders" },
    { icon: "assets/icon/users.png", text: "Customer", path: "customer" },
    { icon: "assets/icon/menu.png", text: "Categories", path: "categories" },
    { icon: "assets/icon/menu.png", text: "Sub Categories", path: "categories" },
  ];

  return (
    <>
      <div className="sidebar-section">
        {/* Logo Section */}
        <div className="logo text-center mt-2">
          <Link to="/"><img src="assets/logo.png" alt="Logo" /></Link>
          <hr />
        </div>

        {/* Sidebar Links */}
        {sidebarLinks.map((link, index) => (
          <div className="sidebar-link ms-3" key={index}>
            <Link
              to={link.path}
              className="text-decoration-none text-white"
            >
              <div className="sidebar-link-main d-flex align-items-center">
                <span>
                  <img src={link.icon} alt={link.text} />
                </span>
                <p className="ms-2 m-0">{link.text}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
