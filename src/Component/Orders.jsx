import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEye } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      invoiceNo: "INV001",
      orderTime: "2024-12-01 10:00 AM",
      customerName: "John Doe",
      amount: "$150",
      status: "Pending",
    },
    {
      invoiceNo: "INV002",
      orderTime: "2024-12-02 11:00 AM",
      customerName: "Jane Smith",
      amount: "$200",
      status: "Cancelled",
    },
    {
      invoiceNo: "INV003",
      orderTime: "2024-12-03 02:00 PM",
      customerName: "Michael Johnson",
      amount: "$300",
      status: "Delivered",
    },
    {
      invoiceNo: "INV004",
      orderTime: "2024-12-04 09:00 AM",
      customerName: "Emily Davis",
      amount: "$450",
      status: "Delivered",
    },
    {
      invoiceNo: "INV005",
      orderTime: "2024-12-05 03:30 PM",
      customerName: "William Brown",
      amount: "$250",
      status: "Pending",
    },
    {
      invoiceNo: "INV006",
      orderTime: "2024-12-06 12:15 PM",
      customerName: "Olivia Wilson",
      amount: "$180",
      status: "Cancelled",
    },
    {
      invoiceNo: "INV007",
      orderTime: "2024-12-07 01:00 PM",
      customerName: "James Taylor",
      amount: "$350",
      status: "Delivered",
    },
    {
      invoiceNo: "INV008",
      orderTime: "2024-12-08 10:45 AM",
      customerName: "Sophia Martinez",
      amount: "$400",
      status: "Pending",
    },
    {
      invoiceNo: "INV009",
      orderTime: "2024-12-09 09:30 AM",
      customerName: "Benjamin Anderson",
      amount: "$600",
      status: "Delivered",
    },
    {
      invoiceNo: "INV010",
      orderTime: "2024-12-10 11:00 AM",
      customerName: "Isabella Clark",
      amount: "$350",
      status: "Cancelled",
    },
    {
      invoiceNo: "INV011",
      orderTime: "2024-12-11 02:00 PM",
      customerName: "Daniel Lee",
      amount: "$500",
      status: "Pending",
    },
    {
      invoiceNo: "INV012",
      orderTime: "2024-12-12 04:15 PM",
      customerName: "Mia King",
      amount: "$275",
      status: "Delivered",
    },
  ]);

  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Declare isWithinDateRange before it's used
  const isWithinDateRange = (orderTime) => {
    const orderDate = new Date(orderTime);
    const startDateValid = startDate ? orderDate >= startDate : true;
    const endDateValid = endDate ? orderDate <= endDate : true;
    return startDateValid && endDateValid;
  };

  const handleStatusChange = (invoiceNo, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.invoiceNo === invoiceNo ? { ...order, status: newStatus } : order
      )
    );
  };

  const filteredOrders = orders.filter((order) => {
    return (
      (filterName
        ? order.customerName.toLowerCase().includes(filterName.toLowerCase())
        : true) &&
      (filterStatus ? order.status === filterStatus : true) &&
      isWithinDateRange(order.orderTime) // Use the function here
    );
  });

  const columns = [
    {
      name: "Invoice No",
      selector: (row) => row.invoiceNo,
      sortable: true,
    },
    {
      name: "Order Time",
      selector: (row) => row.orderTime,
      sortable: true,
    },
    {
      name: "Customer Name",
      selector: (row) => row.customerName,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => {
        let statusStyle = { fontWeight: "bold" };
        if (row.status === "Delivered") {
          statusStyle = { ...statusStyle, color: "green" };
        } else if (row.status === "Cancelled") {
          statusStyle = { ...statusStyle, color: "red" };
        } else if (row.status === "Pending") {
          statusStyle = { ...statusStyle, color: "orange" };
        }

        return <div style={statusStyle}>{row.status}</div>;
      },
    },
    {
      name: "Action",
      cell: (row) => (
        <select
          className="form-control"
          value={row.status}
          onChange={(e) => handleStatusChange(row.invoiceNo, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      ),
    },
    {
      name: "View",
      cell: (row) => (
        <button
          className="btn btn-info"
          onClick={() => alert(`Viewing details for invoice: ${row.invoiceNo}`)}
        >
          <FaEye />
        </button>
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
    <div className="order-section">
      <div className="container mt-4">
        <h4 className="mb-4">Orders</h4>

        {/* Filter Inputs */}
        <div className="row mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control select-box"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">Filter by Status</option>
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="col-md-4">
            <div className="d-flex">
              <div className="mr-2">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Start Date"
                  dateFormat="yyyy-MM-dd"
                  className="form-control"
                />
              </div>
              <div>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="End Date"
                  dateFormat="yyyy-MM-dd"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DataTable */}
        <DataTable
          columns={columns}
          data={filteredOrders}
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
