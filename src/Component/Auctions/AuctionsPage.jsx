// import React, { useState } from "react";
// import DataTable from "react-data-table-component";
// import { FaEye, FaEdit } from "react-icons/fa";

// export default function AuctionsPage() {
//   const [auctions, setAuctions] = useState([
//     {
//       id: 1,
//       AuctionsName: "Antique Auction",
//       AuctionsDescription: "A rare collection of antiques from the 18th century.",
//       AuctionsDate: "2024-12-25",
//       type: "Online",
//     },
//     {
//       id: 2,
//       AuctionsName: "Car Auction",
//       AuctionsDescription: "Luxury and sports cars available for bidding.",
//       AuctionsDate: "2024-12-20",
//       type: "Offline",
//     },
//     {
//       id: 3,
//       AuctionsName: "Art Auction",
//       AuctionsDescription: "Exclusive art pieces from renowned artists.",
//       AuctionsDate: "2024-12-18",
//       type: "Online",
//     },
//     {
//       id: 4,
//       AuctionsName: "Real Estate Auction",
//       AuctionsDescription: "Properties from across the country up for bidding.",
//       AuctionsDate: "2025-01-15",
//       type: "Offline",
//     },
//   ]);

//   const [filterDate, setFilterDate] = useState("");

//   const handleView = (id) => {
//     alert(`Viewing details for Auction ID: ${id}`);
//   };

//   const handleEdit = (id) => {
//     alert(`Editing details for Auction ID: ${id}`);
//   };

//   const handleAddNewAuction = () => {
//     alert("Add New Auction functionality coming soon!");
//   };

//   const filteredAuctions = filterDate
//     ? auctions.filter((auction) => new Date(auction.AuctionsDate) >= new Date(filterDate))
//     : auctions;

//   const columns = [
//     {
//       name: "ID",
//       selector: (row) => row.id,
//       sortable: true,
//       width: "70px",
//     },
//     {
//       name: "Auction Name",
//       selector: (row) => row.AuctionsName,
//       sortable: true,
//     },
//     {
//       name: "Description",
//       selector: (row) => row.AuctionsDescription,
//       sortable: false,
//     },
//     {
//       name: "Date",
//       selector: (row) => row.AuctionsDate,
//       sortable: true,
//     },
//     {
//       name: "Type",
//       selector: (row) => row.type,
//       sortable: true,
//       cell: (row) => (
//         <span
//           className={`${
//             row.type === "Online" ? "text-success" : "text-primary"
//           } font-weight-bold`}
//         >
//           {row.type}
//         </span>
//       ),
//     },
//     {
//       name: "Action",
//       cell: (row) => (
//         <div className="d-flex gap-2">
//           <button
//             onClick={() => handleView(row.id)}
//             className="view-button"
//             title="View"
//           >
//             <FaEye size={18} />
//           </button>
//           <button
//             onClick={() => handleEdit(row.id)}
//             className="edit-button"
//             title="Edit"
//           >
//             <FaEdit size={18} />
//           </button>
//         </div>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//   ];

//   const customStyles = {
//     headCells: {
//       style: {
//         fontWeight: "bold",
//         fontSize: "16px",
//         backgroundColor: "#f8f9fa",
//         borderBottom: "2px solid #dee2e6",
//       },
//     },
//     cells: {
//       style: {
//         fontSize: "14px",
//       },
//     },
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-4">Auctions</h3>

//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div>
//           <label htmlFor="filterDate" className="form-label">
//             Filter by Date:
//           </label>
//           <input
//             type="date"
//             id="filterDate"
//             className="form-control"
//             value={filterDate}
//             onChange={(e) => setFilterDate(e.target.value)}
//           />
//         </div>

//         <button
//           className="btn btn-primary"
//           onClick={handleAddNewAuction}
//         >
//           Add New Auction
//         </button>
//       </div>

//       <DataTable
//         columns={columns}
//         data={filteredAuctions}
//         pagination
//         highlightOnHover
//         striped
//         responsive
//         customStyles={customStyles}
//       />
//     </div>
//   );
// }

import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEye, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AuctionsPage() {
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      AuctionsName: "Antique Auction",
      AuctionsDescription:
        "A rare collection of antiques from the 18th century.",
      AuctionsDate: "2024-12-25",
      type: "Online",
    },
    {
      id: 2,
      AuctionsName: "Car Auction",
      AuctionsDescription: "Luxury and sports cars available for bidding.",
      AuctionsDate: "2024-12-20",
      type: "Offline",
    },
    {
      id: 3,
      AuctionsName: "Art Auction",
      AuctionsDescription: "Exclusive art pieces from renowned artists.",
      AuctionsDate: "2024-12-18",
      type: "Online",
    },
    {
      id: 4,
      AuctionsName: "Real Estate Auction",
      AuctionsDescription: "Properties from across the country up for bidding.",
      AuctionsDate: "2025-01-15",
      type: "Offline",
    },
  ]);

  const [filterDate, setFilterDate] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleView = (id) => {
    alert(`Viewing details for Auction ID: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Editing details for Auction ID: ${id}`);
  };

  const filteredAuctions = auctions.filter((auction) => {
    const matchesDate = filterDate
      ? new Date(auction.AuctionsDate) >= new Date(filterDate)
      : true;
    const matchesName = filterName
      ? auction.AuctionsName.toLowerCase().includes(filterName.toLowerCase())
      : true;
    return matchesDate && matchesName;
  });

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "70px",
    },
    {
      name: "Auction Name",
      selector: (row) => row.AuctionsName,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.AuctionsDescription,
      sortable: false,
    },
    {
      name: "Date",
      selector: (row) => row.AuctionsDate,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
      cell: (row) => (
        <span
          className={`${
            row.type === "Online" ? "text-success" : "text-primary"
          } font-weight-bold`}
        >
          {row.type}
        </span>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="d-flex gap-2">
          <button
            onClick={() => handleView(row.id)}
            className="view-button"
            title="View"
          >
            <FaEye size={18} />
          </button>
          <button
            onClick={() => handleEdit(row.id)}
            className="edit-button"
            title="Edit"
          >
            <FaEdit size={18} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "16px",
        backgroundColor: "#f8f9fa",
        borderBottom: "2px solid #dee2e6",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
      },
    },
  };

  return (
    <div className="auction-section">
      <div className="container mt-4">
        <div className="page-tittle">
          <h4 className="mb-4">Auctions</h4>
        </div>

        <div className="d-flex justify-content-between align-items-end mb-3">
          <div className="d-flex gap-3">
            <div>
              <input
                type="date"
                id="filterDate"
                className="form-control"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="filterName"
                className="form-control"
                placeholder="Filter by Name"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
              />
            </div>
          </div>

          <div className="add-auction-btn">
            <Link to="/add-new-auction" className="btn btn-primary">Add New Auction</Link>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filteredAuctions}
          pagination
          highlightOnHover
          striped
          responsive
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}
