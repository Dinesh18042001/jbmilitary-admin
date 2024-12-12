// import React, { useState } from "react";

// export default function Header() {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const nav = document.querySelector(".navbar");
//       if (document.documentElement.scrollTop > 20) {
//         nav.classList.add("header-scrolled");
//       } else {
//         nav.classList.remove("header-scrolled");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleSearchClick = () => {
//     setShowSearchBar(!showSearchBar);
//   };


//   return (
//     <>
//       <div className="header mt-1">
//         <div className="row align-items-center justify-content-between">
//           <div className="col-6 d-flex align-items-center">
//             <div className="menu-link">
//             <i class="fa-solid fa-bars"></i>
//             </div>
//             <div className="header-search-box w-100">
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="fas fa-search"></i>
//                 </span>
//                 <input
//                   type="search"
//                   className="form-control"
//                   placeholder="Search..."
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="col-6 d-flex justify-content-end position-relative">
//             <div className="avatar" onClick={toggleModal}>
//               <img
//                 src="assets/avatar.jpg"
//                 alt="User Avatar"
//                 className="img-fluid rounded-circle"
//                 style={{ cursor: "pointer" }}
//               />
//             </div>

//             {/* Modal */}
//             {showModal && (
//               <div
//                 className=" avatar-model position-absolute bg-white shadow rounded p-2"
//                 style={{
//                   top: "134%",
//                   right:"0px",
//                   width: "154px",
//                   zIndex: 1050,
//                 }}
//               >
//                 <ul className="list-unstyled m-0">
                 
//                   <li className="">
//                     <a href="#logout" className="text-decoration-none text-danger">
//                       Logout
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
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
                    href="#logout"
                    className="text-decoration-none text-danger"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
