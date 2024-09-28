import React, { useState, useEffect } from "react";
import { Table, Typography, Input, Spin } from "antd";
import axios from "axios";

const { Title } = Typography;
const { Search } = Input;

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const TabThree = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]); // State for search results
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options); // Format: MM/DD/YYYY
  };

  // Fetch the data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/newsletter/emails`); // API call to fetch emails
        const formattedData = response.data.map((item, index) => ({
          key: index + 1, // Key for Table row
          serialNumber: index + 1, // Serial number starts from 1 and increments
          date: formatDate(item.createdAt), // Format the date from the 'createdAt' field
          email: item.email,
        }));
        setData(formattedData);
        setFilteredData(formattedData); // Set filtered data to initially show all entries
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle search
  const handleSearch = (value) => {
    setSearchTerm(value); // Update search term state
    const filtered = data.filter((entry) =>
      entry.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered); // Update the displayed data with the filtered results
  };

  // Define columns for the table
  const columns = [
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
      render: (text, record, index) => index + 1, // Serial number based on index
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={3}>Newsletter Subscriptions</Title>

      {/* Search Input */}
      <Search
        placeholder="Search by email"
        enterButton="Search"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: "20px", maxWidth: "400px" }}
      />

      {loading ? (
        <Spin tip="Loading..." />
      ) : (
        <Table
          columns={columns}
          dataSource={filteredData} // Use filtered data
          pagination={{ pageSize: 10 }} // Pagination for 10 rows per page
        />
      )}
    </div>
  );
};

export default TabThree;
