// import React, { useState } from "react";
// import DataTable from "react-data-table-component";
// import { FaTrash, FaEdit } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Categories() {
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Electronics", description: "Electronic gadgets", published: true },
//     { id: 2, name: "Fashion", description: "Clothing and accessories", published: false },
//     { id: 3, name: "Home Appliances", description: "Appliances for home use", published: true },
//     { id: 4, name: "Books", description: "Books of various genres", published: false },
//     { id: 5, name: "Sports", description: "Sports equipment and gear", published: true },
//     { id: 6, name: "Toys", description: "Toys for children", published: true },
//     { id: 7, name: "Automotive", description: "Car parts and accessories", published: false },
//     { id: 8, name: "Health & Beauty", description: "Personal care products", published: true },
//     { id: 9, name: "Groceries", description: "Food and grocery items", published: true },
//     { id: 10, name: "Furniture", description: "Home and office furniture", published: false },
//     { id: 11, name: "Music", description: "Musical instruments and accessories", published: true },
//     { id: 12, name: "Art & Crafts", description: "Art supplies and craft materials", published: false },
//   ]);

//   const handleTogglePublish = (id) => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) =>
//         category.id === id ? { ...category, published: !category.published } : category
//       )
//     );
  
//     // Get the updated category after toggling
//     const updatedCategory = categories.find((category) => category.id === id);
    
//     if (updatedCategory.published) {
//       toast.info(`Category is unpublished!`);
//     } else {
//       toast.info(`Category is published!`);
//     }
//   };
  
//   const handleEdit = (category) => {
//     toast.success(`Editing category: ${category.name}`);
//   };

//   const handleDelete = (category) => {
//     if (window.confirm(`Are you sure you want to delete ${category.name}?`)) {
//       setCategories((prevCategories) => prevCategories.filter((item) => item.id !== category.id));
//       toast.error(`${category.name} has been deleted`);
//     }
//   };

//   const columns = [
//     {
//       name: "ID",
//       selector: (row) => row.id,
//       sortable: true,
//       center: false, 
//     },
//     {
//       name: "Name",
//       selector: (row) => row.name,
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
//           <button className="btn btn-info me-2" onClick={() => handleEdit(row)}>
//             <FaEdit />
//           </button>
//           <button
//             className="btn btn-danger"
//             onClick={() => handleDelete(row)}
//           >
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
//     <div className="container mt-4">
//       <h2 className="mb-4 fs-1">Manage Categories</h2>
//       <DataTable
//         columns={columns}
//         data={categories}
//         pagination
//         highlightOnHover
//         defaultSortField="id"
//         responsive
//         customStyles={customStyles}
//       />
//       {/* ToastContainer to show notifications */}
//       <ToastContainer />
//     </div>
//   );
// }



import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Electronic gadgets", published: true },
    { id: 2, name: "Fashion", description: "Clothing and accessories", published: false },
    { id: 3, name: "Home Appliances", description: "Appliances for home use", published: true },
    { id: 4, name: "Books", description: "Books of various genres", published: false },
    { id: 5, name: "Sports", description: "Sports equipment and gear", published: true },
    { id: 6, name: "Toys", description: "Toys for children", published: true },
    { id: 7, name: "Automotive", description: "Car parts and accessories", published: false },
    { id: 8, name: "Health & Beauty", description: "Personal care products", published: true },
    { id: 9, name: "Groceries", description: "Food and grocery items", published: true },
    { id: 10, name: "Furniture", description: "Home and office furniture", published: false },
    { id: 11, name: "Music", description: "Musical instruments and accessories", published: true },
    { id: 12, name: "Art & Crafts", description: "Art supplies and craft materials", published: false },
  ]);

  const [filter, setFilter] = useState("");

  const handleTogglePublish = (id) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id ? { ...category, published: !category.published } : category
      )
    );
  
    const updatedCategory = categories.find((category) => category.id === id);
    
    if (updatedCategory.published) {
      toast.info(`Category is unpublished!`);
    } else {
      toast.info(`Category is published!`);
    }
  };



  const handleDelete = (category) => {
    setCategories((prevCategories) => prevCategories.filter((item) => item.id !== category.id));
    toast.error(`${category.name} has been deleted`);
  };



  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      center: false, 
    },
    {
      name: "Name",
      selector: (row) => row.name,
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
        <div>
          <button className="btn btn-info me-2">
            <FaEdit />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(row)}
          >
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
    <div className="container mt-4">
      <h2 className="mb-4 fs-1">Manage Categories</h2>

      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Name"
            value={filter}
            onChange={handleFilterChange}
            style={{ maxWidth: "300px" }}
          />
        </div>
        <button className="btn btn-primary" >
          <FaPlus /> Add New Category
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filteredCategories}
        pagination
        highlightOnHover
        defaultSortField="id"
        responsive
        customStyles={customStyles}
      />
      {/* ToastContainer to show notifications */}
      <ToastContainer />
    </div>
  );
}

