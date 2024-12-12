import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrash, FaEye } from "react-icons/fa"; // Importing delete and view icons

export default function Customer() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      joiningDate: "2024-01-01",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      joiningDate: "2024-02-15",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "234-567-8901",
    },
    {
      id: 3,
      joiningDate: "2024-03-20",
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "345-678-9012",
    },
    {
      id: 4,
      joiningDate: "2024-04-05",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "456-789-0123",
    },
    {
      id: 5,
      joiningDate: "2024-05-10",
      name: "William Brown",
      email: "william.brown@example.com",
      phone: "567-890-1234",
    },
    {
      id: 6,
      joiningDate: "2024-06-18",
      name: "Olivia Wilson",
      email: "olivia.wilson@example.com",
      phone: "678-901-2345",
    },
    {
      id: 7,
      joiningDate: "2024-07-25",
      name: "James Taylor",
      email: "james.taylor@example.com",
      phone: "789-012-3456",
    },
    {
      id: 8,
      joiningDate: "2024-08-14",
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      phone: "890-123-4567",
    },
    {
      id: 9,
      joiningDate: "2024-09-30",
      name: "Benjamin Anderson",
      email: "benjamin.anderson@example.com",
      phone: "901-234-5678",
    },
    {
      id: 10,
      joiningDate: "2024-10-21",
      name: "Isabella Clark",
      email: "isabella.clark@example.com",
      phone: "012-345-6789",
    },
    {
      id: 11,
      joiningDate: "2024-11-11",
      name: "Daniel Lee",
      email: "daniel.lee@example.com",
      phone: "123-456-7890",
    },
    {
      id: 12,
      joiningDate: "2024-12-01",
      name: "Mia King",
      email: "mia.king@example.com",
      phone: "234-567-8901",
    },
  ]);

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCustomers = customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      customer.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      customer.phone.includes(filters.phone)
    );
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter((customer) => customer.id !== id));
    }
  };

  const handleView = (customer) => {
    alert(
      `Viewing customer details:\nName: ${customer.name}\nEmail: ${customer.email}\nPhone: ${customer.phone}`
    );
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Joining Date",
      selector: (row) => row.joiningDate,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button className="btn btn-info me-2" onClick={() => handleView(row)}>
            <FaEye />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(row.id)}
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
    <div className="customer-section">
      <div className="container mt-4">
        <h4 className="mb-4">Customer Management</h4>

        <div className="row mb-4">
          <div className="col-md-4">
            <input
              type="text"
              name="name"
              placeholder="Filter by Name"
              className="form-control"
              value={filters.name}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              name="email"
              placeholder="Filter by Email"
              className="form-control"
              value={filters.email}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="phone"
              placeholder="Filter by Phone"
              className="form-control"
              value={filters.phone}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filteredCustomers}
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
