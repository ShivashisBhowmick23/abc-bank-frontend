import React from 'react';

const CustomerDetails = ({ customer }) => {
  return (
    <div>
      <h2>{customer.firstName} {customer.lastName}</h2>
      <p>Email: {customer.email}</p>
      {/* Add other fields */}
    </div>
  );
};

export default CustomerDetails;
