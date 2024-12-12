import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

export default function Products() {
  const [data, setData] = useState([
    { id: 1, img: "assets/product-img/img1.webp", name: "Product A", category: "Electronics", sku: "ELEC123", price: "$100", stocks: 20, rating: 4.5, status: "Available" },
    { id: 2, img: "assets/product-img/img2.webp", name: "Product B", category: "Furniture", sku: "FURN456", price: "$200", stocks: 15, rating: 4.0, status: "Sold" },
    { id: 3, img: "assets/product-img/img3.webp", name: "Product C", category: "Clothing", sku: "CLOT789", price: "$50", stocks: 50, rating: 4.8, status: "Available" },
    { id: 4, img: "assets/product-img/img4.webp", name: "Product D", category: "Electronics", sku: "ELEC234", price: "$300", stocks: 10, rating: 4.2, status: "Sold" },
    { id: 5, img: "assets/product-img/img5.webp", name: "Product E", category: "Appliances", sku: "APP567", price: "$400", stocks: 5, rating: 4.7, status: "Available" },
    { id: 6, img: "assets/product-img/img1.webp", name: "Product F", category: "Books", sku: "BOOK890", price: "$20", stocks: 100, rating: 4.9, status: "Available" },
    { id: 7, img: "assets/product-img/img2.webp", name: "Product G", category: "Electronics", sku: "ELEC678", price: "$250", stocks: 30, rating: 4.4, status: "Sold" },
    { id: 8, img: "assets/product-img/img3.webp", name: "Product H", category: "Furniture", sku: "FURN789", price: "$600", stocks: 8, rating: 4.3, status: "Available" },
    { id: 9, img: "assets/product-img/img4.webp", name: "Product I", category: "Clothing", sku: "CLOT123", price: "$80", stocks: 60, rating: 4.6, status: "Sold" },
    { id: 10, img: "assets/product-img/img5.webp", name: "Product J", category: "Appliances", sku: "APP345", price: "$150", stocks: 12, rating: 4.5, status: "Available" },
    { id: 11, img: "assets/product-img/img1.webp", name: "Product K", category: "Books", sku: "BOOK456", price: "$15", stocks: 200, rating: 5.0, status: "Sold" },
    { id: 12, img: "assets/product-img/img2.webp", name: "Product L", category: "Gaming", sku: "GAME789", price: "$500", stocks: 7, rating: 4.8, status: "Available" },
  ]);
  const [search, setSearch] = useState("");

  // Handle search functionality
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Filtered data based on search query
  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase()) ||
    product.sku.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "60px",
    },
    {
      name: "Image",
      cell: (row) => <img src={row.img} alt={row.name} style={{ width: "70px", borderRadius: "5px" }} />,
      width: "80px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "SKU",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Stocks",
      selector: (row) => row.stocks,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
      cell: (row) => `${row.rating} ★`,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span style={{ color: row.status === "Sold" ? "#dc3545" : "#28a745", fontWeight: "bold" }}>
          {row.status}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", alignItems: "center" }}>
          {/* View Icon */}
          <FaEye
            style={{
              color: "#007bff",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => alert(`Viewing product: ${row.name}`)}
          />
          {/* Edit Icon */}
          <FaEdit
            style={{
              color: "#ffc107",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => alert(`Editing product: ${row.name}`)}
          />
          {/* Delete Icon */}
          <FaTrashAlt
            style={{
              color: "#dc3545",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleDelete(row.id)}
          />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setData(data.filter((product) => product.id !== id));
      alert(`Product with ID ${id} has been deleted.`);
    }
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
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
      <h4 className="mb-4">Products Data Table</h4>

      {/* Search Bar */}
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search Products..."
          value={search}
          onChange={handleSearch}
          style={{ width: "300px" }}
        />
        {/* Add New Product Button */}
        <a className="add-product-btn">
          Add New Product
        </a>
      </div>

      {/* DataTable with filtered data */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        striped
        responsive
        customStyles={customStyles}
      />
    </div>
  );
}
