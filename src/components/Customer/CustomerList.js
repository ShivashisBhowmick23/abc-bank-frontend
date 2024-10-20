import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CustomerList.css'; // Link to external stylesheet

const CustomerList = ({ customers }) => {
  return (
    <table className="customer-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Verification Documents</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.cust_id}>
            <td>
              <Link to={`/customers/${customer.cust_id}`} className="customer-link">
                {customer.cust_id}
              </Link>
            </td>
            <td>{customer.cust_name}</td>
            <td>{customer.cust_mail}</td>
            <td>
              <input
                type="checkbox"
                checked={customer.verification_documents}
                readOnly
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerList;
