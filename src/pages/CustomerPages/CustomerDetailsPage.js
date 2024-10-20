import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerById } from '../../api';
import CustomerDetails from '../../components/Customer/CustomerDetails';

const CustomerDetailsPage = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    getCustomerById(id)
      .then((response) => setCustomer(response.data))
      .catch((error) => console.error('Error fetching customer:', error));
  }, [id]);

  return (
    <div>
      {customer ? <CustomerDetails customer={customer} /> : <p>Loading...</p>}
    </div>
  );
};

export default CustomerDetailsPage;
