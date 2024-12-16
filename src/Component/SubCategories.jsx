// import React, { useState } from "react";
// import DataTable from "react-data-table-component";
// import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function SubCategories() {
//     const [subCategories, setSubCategories] = useState([
//         { id: 1, categoryName: "Smartphones", description: "Mobile phones and accessories", parentCategory: "Electronics", published: true },
//         { id: 2, categoryName: "Men's Clothing", description: "Apparel for men", parentCategory: "Fashion", published: false },
//         { id: 3, categoryName: "Kitchen Appliances", description: "Cooking and kitchen tools", parentCategory: "Home & Kitchen", published: true },
//         { id: 4, categoryName: "Fiction Books", description: "Novels and fiction", parentCategory: "Books", published: false },
//         { id: 5, categoryName: "Outdoor Sports", description: "Equipment for outdoor activities", parentCategory: "Sports & Outdoors", published: true },
//         { id: 6, categoryName: "Gaming Consoles", description: "Video gaming consoles and accessories", parentCategory: "Electronics", published: true },
//         { id: 7, categoryName: "Women's Footwear", description: "Shoes, sandals, and heels for women", parentCategory: "Fashion", published: true },
//         { id: 8, categoryName: "Baby Care", description: "Products for infants and toddlers", parentCategory: "Kids & Baby", published: false },
//         { id: 9, categoryName: "Fitness Equipment", description: "Gym and workout gear", parentCategory: "Sports & Outdoors", published: true },
//         { id: 10, categoryName: "Home Decor", description: "Decorative items for home", parentCategory: "Home & Kitchen", published: false },
//         { id: 11, categoryName: "Non-Fiction Books", description: "Biographies, self-help, and educational books", parentCategory: "Books", published: true },
//         { id: 12, categoryName: "Cameras & Photography", description: "Cameras, lenses, and accessories", parentCategory: "Electronics", published: false },
//       ]);

//   const [filter, setFilter] = useState("");

//   const handleTogglePublish = (id) => {
//     setSubCategories((prevSubCategories) =>
//       prevSubCategories.map((subCategory) =>
//         subCategory.id === id
//           ? { ...subCategory, published: !subCategory.published }
//           : subCategory
//       )
//     );

//     const updatedSubCategory = subCategories.find((subCategory) => subCategory.id === id);

//     if (updatedSubCategory.published) {
//       toast.info(`SubCategory is unpublished!`);
//     } else {
//       toast.info(`SubCategory is published!`);
//     }
//   };

//   const handleDelete = (subCategory) => {
//     setSubCategories((prevSubCategories) =>
//       prevSubCategories.filter((item) => item.id !== subCategory.id)
//     );
//     toast.error(`${subCategory.categoryName} has been deleted`);
//   };

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const filteredSubCategories = subCategories.filter((subCategory) =>
//     subCategory.categoryName.toLowerCase().includes(filter.toLowerCase())
//   );

//   const columns = [
//     {
//       name: "ID",
//       selector: (row) => row.id,
//       sortable: true,
//     },
//     {
//       name: "Category Name",
//       selector: (row) => row.categoryName,
//       sortable: true,
//     },
//     {
//       name: "Parent Category",
//       selector: (row) => row.parentCategory,
//       sortable: true,
//     },
//     {
//       name: "Description",
//       selector: (row) => row.description,
//       sortable: true,
//     },
//     {
//       name: "Published",
//       cell: (row) => (
//         <div className="d-flex justify-content-center">
//           <label className="switch">
//             <input
//               type="checkbox"
//               checked={row.published}
//               onChange={() => handleTogglePublish(row.id)}
//             />
//             <span className="slider round"></span>
//           </label>
//         </div>
//       ),
//       center: true,
//     },
//     {
//       name: "Actions",
//       cell: (row) => (
//         <div>
//           <button className="btn btn-info me-2">
//             <FaEdit />
//           </button>
//           <button className="btn btn-danger" onClick={() => handleDelete(row)}>
//             <FaTrash />
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
//     <>
//       <div className="subcategories-section">
//         <div className="container mt-4">
//           <h4 className="mb-4 fs-1">Manage SubCategories</h4>

//           <div className="d-flex justify-content-between mb-3">
//             <div className="d-flex align-items-center">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Filter by Category Name"
//                 value={filter}
//                 onChange={handleFilterChange}
//                 style={{ maxWidth: "300px" }}
//               />
//             </div>
//             <div className="subcategories-btn">
//               <button className="btn btn-primary">
//                 <FaPlus /> Add New SubCategory
//               </button>
//             </div>
//           </div>

//           <DataTable
//             columns={columns}
//             data={filteredSubCategories}
//             pagination
//             highlightOnHover
//             defaultSortField="id"
//             responsive
//             customStyles={customStyles}
//           />
//           <ToastContainer />
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrash, FaEdit, FaEye, FaPlus } from "react-icons/fa"; // Added FaEye for the View button
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubCategories() {
  const [subCategories, setSubCategories] = useState([
    { id: 1, categoryName: "Smartphones", description: "Mobile phones and accessories", parentCategory: "Electronics", published: true },
    { id: 2, categoryName: "Men's Clothing", description: "Apparel for men", parentCategory: "Fashion", published: false },
    { id: 3, categoryName: "Kitchen Appliances", description: "Cooking and kitchen tools", parentCategory: "Home & Kitchen", published: true },
    { id: 4, categoryName: "Fiction Books", description: "Novels and fiction", parentCategory: "Books", published: false },
    { id: 5, categoryName: "Outdoor Sports", description: "Equipment for outdoor activities", parentCategory: "Sports & Outdoors", published: true },
    { id: 6, categoryName: "Gaming Consoles", description: "Video gaming consoles and accessories", parentCategory: "Electronics", published: true },
    { id: 7, categoryName: "Women's Footwear", description: "Shoes, sandals, and heels for women", parentCategory: "Fashion", published: true },
    { id: 8, categoryName: "Baby Care", description: "Products for infants and toddlers", parentCategory: "Kids & Baby", published: false },
    { id: 9, categoryName: "Fitness Equipment", description: "Gym and workout gear", parentCategory: "Sports & Outdoors", published: true },
    { id: 10, categoryName: "Home Decor", description: "Decorative items for home", parentCategory: "Home & Kitchen", published: false },
    { id: 11, categoryName: "Non-Fiction Books", description: "Biographies, self-help, and educational books", parentCategory: "Books", published: true },
    { id: 12, categoryName: "Cameras & Photography", description: "Cameras, lenses, and accessories", parentCategory: "Electronics", published: false },
  ]);

  const [filter, setFilter] = useState("");

  const handleTogglePublish = (id) => {
    setSubCategories((prevSubCategories) =>
      prevSubCategories.map((subCategory) =>
        subCategory.id === id
          ? { ...subCategory, published: !subCategory.published }
          : subCategory
      )
    );

    const updatedSubCategory = subCategories.find((subCategory) => subCategory.id === id);

    if (updatedSubCategory.published) {
      toast.info(`SubCategory is unpublished!`);
    } else {
      toast.info(`SubCategory is published!`);
    }
  };

  const handleDelete = (subCategory) => {
    setSubCategories((prevSubCategories) =>
      prevSubCategories.filter((item) => item.id !== subCategory.id)
    );
    toast.error(`${subCategory.categoryName} has been deleted`);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredSubCategories = subCategories.filter((subCategory) =>
    subCategory.categoryName.toLowerCase().includes(filter.toLowerCase())
  );

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Category Name",
      selector: (row) => row.categoryName,
      sortable: true,
    },
    {
      name: "Parent Category",
      selector: (row) => row.parentCategory,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Published",
      cell: (row) => (
        <div className="d-flex justify-content-center">
          <label className="switch">
            <input
              type="checkbox"
              checked={row.published}
              onChange={() => handleTogglePublish(row.id)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      ),
      center: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex justify-content-center align-items-center gap-2">
          <button className="btn btn-success" title="Edit">
            <FaEdit />
          </button>
          <button className="btn btn-primary" title="View">
            <FaEye />
          </button>
          <button className="btn btn-danger" title="Delete" onClick={() => handleDelete(row)}>
            <FaTrash />
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
    <>
      <div className="subcategories-section">
        <div className="container mt-4">
          <h4 className="mb-4 fs-1">Manage SubCategories</h4>

          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Filter by Category Name"
                value={filter}
                onChange={handleFilterChange}
                style={{ maxWidth: "300px" }}
              />
            </div>
            <div className="subcategories-btn">
              <Link to="/add-sub-category" className="btn btn-primary">
                <FaPlus /> Add New SubCategory
              </Link>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={filteredSubCategories}
            pagination
            highlightOnHover
            defaultSortField="id"
            responsive
            customStyles={customStyles}
          />
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
