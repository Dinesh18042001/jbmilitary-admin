import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileSidebar from "./MobileSidebar/MobileSidebar";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    toast.success("You have logged out successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        minWidth: "200px",
        fontSize: "14px",
        padding: "10px",
        borderRadius: "8px",
      },
    });

    setTimeout(() => {
      navigate("/login");
    }, 1500);
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
    <>
      {/* Header */}
      <div className="header mt-1">
        <div className="row align-items-center justify-content-between">
          {/* Left Section: Menu and Search */}
          <div className="col-6 d-flex align-items-center">
            {/* Menu Icon */}
            <div
              className="menu-link"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample" 
              aria-controls="offcanvasExample"
            >
              <i className="fa-solid fa-bars"></i>
            </div>

            {/* Search Box */}
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

        {/* Toastify Container */}
        <ToastContainer />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar />
    </>
  );
}
