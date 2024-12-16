import React from "react";
import { Link } from "react-router-dom";

export default function MobileSidebar() {
  const sidebarLinks = [
    { icon: "assets/sidebar-icon/menu.png", text: "Dashboard", path: "/" },
    { icon: "assets/sidebar-icon/documents.png", text: "Products", path: "products" },
    { icon: "assets/sidebar-icon/order.png", text: "Orders", path: "orders" },
    { icon: "assets/sidebar-icon/man-avatar.png", text: "Customer", path: "customer" },
    { icon: "assets/sidebar-icon/menu .png", text: "Categories", path: "categories" },
    { icon: "assets/sidebar-icon/classification.png", text: "Sub Categories", path: "sub-categories" },
  ];

  // JavaScript function to hide the offcanvas
  const hideOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasExample");

    // Check if offcanvas instance is created properly
    if (offcanvasElement) {
      const offcanvasInstance = new window.bootstrap.Offcanvas(offcanvasElement);
      offcanvasInstance.hide();
      
      // Remove the backdrop manually
      const backdrop = document.querySelector(".offcanvas-backdrop");
      if (backdrop) {
        backdrop.classList.remove("show");
        backdrop.style.display = "none";
      }
    }
  };

  return (
    <>
      <div className="offcanvas-section">
        <div
          className="offcanvas offcanvas-start mobil_menu_wrapper d-lg-none d-block"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          {/* Header Section */}
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              <img src="./assets/logo.png" alt="logo" className="img-fluid" />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={hideOffcanvas} // Close offcanvas when the close button is clicked
            ></button>
          </div>

          {/* Sidebar Links */}
          <div className="sidebar-links">
            {sidebarLinks.map((link, index) => (
              <div className="sidebar-link ms-3" key={index}>
                <Link
                  to={link.path}
                  className="text-decoration-none text-dark"
                  onClick={hideOffcanvas}  // Close offcanvas when a link is clicked
                >
                  <div className="d-flex align-items-center">
                    <span>
                      <img src={link.icon} alt={link.text} />
                    </span>
                    <p className="ms-2 m-0">{link.text}</p>
                    {link.isArrow && (
                      <i className="fa-solid fa-arrow-right ms-auto"></i>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
