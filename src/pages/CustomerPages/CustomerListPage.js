import React, { useEffect, useState } from 'react';
import { getAllCustomers } from '../../api';
import CustomerList from '../../components/Customer/CustomerList';
import '../../styles/CustomerListPage.css'; // Link to external stylesheet

const CustomerListPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers()
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div className="customer-page">
      <h1 className="customer-title">ABC Bank - Customer Details</h1>
      {customers.length ? (
        <CustomerList customers={customers} />
      ) : (
        <p className="no-customers">No customers found.</p>
      )}
    </div>
  );
};

export default CustomerListPage;
