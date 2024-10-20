import React from 'react';
import axios from 'axios';
import CreateCustomerForm from './../../components/Customer/CreateCustomerForm'; 

const API_URL = 'http://localhost:8080'; // Adjust the URL as needed

const CreateCustomerPage = () => {
  const handleCreateCustomer = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/bank/add/single-customer`, formData);
      return response;
    } catch (error) {
      console.error("Error creating customer:", error);
      throw error;
    }
  };
  

  return (
    <div>
      <h1>Create Customer</h1>
      <CreateCustomerForm onSubmit={handleCreateCustomer} />
    </div>
  );
};

export default CreateCustomerPage;
