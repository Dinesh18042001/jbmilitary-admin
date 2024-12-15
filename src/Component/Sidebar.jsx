import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  // Sidebar links data
  const sidebarLinks = [
    { icon: "assets/sidebar-icon/menu.png", text: "Dashboard", path: "/" },
    { icon: "assets/sidebar-icon/documents.png", text: "Products", path: "products" },
    { icon: "assets/sidebar-icon/order.png", text: "Orders", path: "orders" },
    { icon: "assets/sidebar-icon/man-avatar.png", text: "Customer", path: "customer" },
    { icon: "assets/sidebar-icon/menu .png", text: "Categories", path: "categories" },
    { icon: "assets/sidebar-icon/classification.png", text: "Sub Categories", path: "sub-categories" },
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
