// import React, { useState } from "react";

// export default function AddNewAuction() {
//   const [auction, setAuction] = useState({
//     name: "",
//     description: "",
//     date: "",
//     type: "Online",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAuction({ ...auction, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Auction Details:", auction);
//   };

//   return (
//     <div className="add-auction-section">
//       <div className="container mt-4">
//         <div className="page-tittle">
//           <h4 className="mb-4">Add New Auction</h4>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="auctionName" className="form-label">
//               Auction Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="auctionName"
//               name="name"
//               value={auction.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">
//               Description
//             </label>
//             <textarea
//               className="form-control"
//               id="description"
//               name="description"
//               value={auction.description}
//               onChange={handleChange}
//               rows="5"
//               required
//             ></textarea>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="date" className="form-label">
//               Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="date"
//               name="date"
//               value={auction.date}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="type" className="form-label">
//               Type
//             </label>
//             <select
//               className="form-select"
//               id="type"
//               name="type"
//               value={auction.type}
//               onChange={handleChange}
//             >
//               <option value="Online">Online</option>
//               <option value="Offline">Offline</option>
//             </select>
//           </div>

//           <button type="submit" className="category-btn btn btn-primary w-100 mb-4 mt-4">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery-validation";

export default function AddNewAuction() {
  const [auction, setAuction] = useState({
    name: "",
    description: "",
    date: "",
    type: "Online",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuction({ ...auction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ($("#auctionForm").valid()) {
      console.log("Auction Details:", auction);
    }
  };

  useEffect(() => {
    $("#auctionForm").validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        description: {
          required: true,
          minlength: 10,
        },
        date: {
          required: true,
          date: true,
        },
      },
      messages: {
        name: {
          required: "Please enter the auction name.",
          minlength: "The name must be at least 3 characters long.",
        },
        description: {
          required: "Please provide a description.",
          minlength: "The description must be at least 10 characters long.",
        },
        date: {
          required: "Please select a date.",
          date: "Please enter a valid date.",
        },
      },
      errorElement: "div",
      errorClass: "text-danger",
    });
  }, []);

  return (
    <div className="add-auction-section">
      <div className="container mt-4">
        <div className="page-tittle">
          <h4 className="mb-4">Add New Auction</h4>
        </div>
        <form id="auctionForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="auctionName" className="form-label">
              Auction Name
            </label>
            <input
              type="text"
              className="form-control"
              id="auctionName"
              name="name"
              value={auction.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={auction.description}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={auction.date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <select
              className="form-select"
              id="type"
              name="type"
              value={auction.type}
              onChange={handleChange}
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <button
            type="submit"
            className="category-btn btn btn-primary w-100 mb-4 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
