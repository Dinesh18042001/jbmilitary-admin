// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import $ from "jquery";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Login() {
//   const predefinedEmail = "hello@123.com";
//   const predefinedPassword = "hello@123";

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Function to handle form submission
//     const handleFormSubmit = (e) => {
//       e.preventDefault(); // Prevent form submission

//       const email = $("#email").val().trim();
//       const password = $("#password").val().trim();
//       let isValid = true;

//       // Clear previous error messages
//       $(".error-message").remove();

//       // Validate email
//       if (!email) {
//         $("#email")
//           .after(
//             '<span class="error-message text-danger">Email is required.</span>'
//           )
//           .focus();
//         isValid = false;
//       } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//         $("#email")
//           .after(
//             '<span class="error-message text-danger">Invalid email format.</span>'
//           )
//           .focus();
//         isValid = false;
//       }

//       // Validate password
//       if (!password) {
//         $("#password")
//           .after(
//             '<span class="error-message text-danger">Password is required.</span>'
//           )
//           .focus();
//         isValid = false;
//       }

//       // If validation passes, check credentials
//       if (isValid) {
//         if (email === predefinedEmail && password === predefinedPassword) {
//           $(".error-message").remove();
//           toast.success("Login successful!", {
//             position: "top-right",
//             autoClose: 2000,
//           });
//           setTimeout(() => {
//             navigate("/dashboard");
//           }, 2000);
//         } else {
//           toast.error("Invalid email or password. Please try again.", {
//             position: "top-right",
//             autoClose: 3000,
//           });
//         }
//       }
//     };

//     // Attach the event listener
//     $("#loginForm").on("submit", handleFormSubmit);

//     // Cleanup on component unmount
//     return () => {
//       $("#loginForm").off("submit", handleFormSubmit);
//     };
//   }, [navigate]);

//   return (
//     <div className="login-section">
//       <div className="container">
//         <div className="row justify-content-center align-items-center min-vh-100">
//           {/* Left Column: Logo */}
//           <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center login-side-icon ">
//             <div className="login-img">
//               <img src="assets/logo.png" alt="Logo" className="img-fluid" />
//             </div>
//           </div>

//           {/* Right Column: Login Form */}
//           <div className="col-lg-6 col-md-8 p-0">
//             <div className="login-container p-4 shadow bg-white">
//               <h1 className="text-center mb-4">Login</h1>
//               <form id="loginForm">
//                 <div className="form-group mb-3">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Enter your Email"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="form-group mb-4">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="Enter your Password"
//                     className="form-control"
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary login-btn w-100 mt-2">
//                   Login
//                 </button>

//                 <div className="forgrt-btn mt-4 text-center">
//                   <a href="#">Forgot password</a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Toast Container */}
//       <ToastContainer />
//     </div>
//   );
// }



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const predefinedEmail = "hello@123gmail.com";
  const predefinedPassword = "hello@123";

  const navigate = useNavigate();

  useEffect(() => {
    const handleFormSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission

      const email = $("#email").val().trim();
      const password = $("#password").val().trim();
      let isValid = true;

      // Clear previous error messages
      $(".error-message").remove();

      // Validate email
      if (!email) {
        $("#email")
          .after('<span class="error-message text-danger">Email is required.</span>')
          .focus();
        isValid = false;
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        $("#email")
          .after('<span class="error-message text-danger">Invalid email format.</span>')
          .focus();
        isValid = false;
      }

      // Validate password
      if (!password) {
        $("#password")
          .after('<span class="error-message text-danger">Password is required.</span>')
          .focus();
        isValid = false;
      }

      // Check credentials
      if (isValid) {
        if (email === predefinedEmail && password === predefinedPassword) {
          $(".error-message").remove();
          toast.success("Login successful!", { position: "top-right", autoClose: 2000 });

          // Set authentication token
          localStorage.setItem("authToken", "mockAuthToken");

          // Redirect to dashboard
          setTimeout(() => navigate("/dashboard"), 2000);
        } else {
          toast.error("Invalid email or password. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }
    };

    $("#loginForm").on("submit", handleFormSubmit);

    return () => {
      $("#loginForm").off("submit", handleFormSubmit);
    };
  }, [navigate]);

  return (
    <div className="login-section">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          {/* Left Column: Logo */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center login-side-icon">
            <div className="login-img">
              <img src="assets/logo.png" alt="Logo" className="img-fluid" />
            </div>
          </div>
          {/* Right Column: Login Form */}
          <div className="col-lg-6 col-md-8 p-0">
            <div className="login-container p-4 shadow bg-white">
              <h1 className="text-center mb-4">Login</h1>
              <form id="loginForm">
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary login-btn w-100 mt-2">
                  Login
                </button>
                <div className="forget-btn mt-4 text-center">
                  <a href="#">Forgot password</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
