

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    // Clear authentication token or session
    localStorage.removeItem("authToken");

    // Show success toast notification
    toast.success("You have logged out successfully!", {
      position: "top-right",
      autoClose: 3000, // Auto close after 3 seconds
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: false, // Disable pause on hover
      draggable: false, // Disable drag feature
      style: {
        minWidth: "200px", // Customize the width
        fontSize: "14px",  // Adjust the font size
        padding: "10px",  // Adjust padding
        borderRadius: "8px", // Round corners
      }
    });

    // Redirect to the login page after a slight delay to show the toast
    setTimeout(() => {
      navigate("/login");
    }, 1500); // Delay for toast to show before navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".header");
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header mt-1">
      <div className="row align-items-center justify-content-between">
        {/* Left Section: Menu and Search */}
        <div className="col-6 d-flex align-items-center">
          <div className="menu-link" aria-label="Toggle Menu">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="header-search-box w-100">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Avatar and Modal */}
        <div className="col-6 d-flex justify-content-end position-relative">
          <div
            className="avatar"
            onClick={toggleModal}
            role="button"
            aria-label="User Options"
          >
            <img
              src="assets/avatar.jpg"
              alt="User Avatar"
              className="img-fluid rounded-circle"
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* Modal */}
          {showModal && (
            <div
              className="avatar-modal position-absolute bg-white shadow rounded p-2"
              style={{
                top: "134%",
                right: "0px",
                width: "154px",
                zIndex: 1050,
              }}
            >
              <ul className="list-unstyled m-0">
                <li>
                  <a
                    className="text-decoration-none text-danger"
                    onClick={handleLogout} 
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Toastify container for displaying toasts */}
      <ToastContainer />
    </div>
  );
}
