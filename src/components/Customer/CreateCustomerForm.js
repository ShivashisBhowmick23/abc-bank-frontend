import React, { useState } from 'react';
import '../../styles/CreateCustomerForm.css'; // External CSS for better styling

const CreateCustomerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cust_name: '',
    cust_mail: '',
    verification_documents: false,
    accountList: [
      {
        account_type: '',
        balance: 0,
      },
    ],
  });

  const [response, setResponse] = useState(null); // State to hold API response

  // Handle form input changes for customer data
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle changes in the accountList array
  const handleAccountChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAccounts = formData.accountList.map((account, i) =>
      i === index ? { ...account, [name]: value } : account
    );
    setFormData({ ...formData, accountList: updatedAccounts });
  };

  // Add a new empty account object
  const addAccount = () => {
    setFormData({
      ...formData,
      accountList: [
        ...formData.accountList,
        { account_type: '', balance: 0 },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData)
      .then((response) => {
        console.log("Response received:", response.data); // Debugging line
        setResponse(response.data);
      })
      .catch((error) => console.error('Error creating customer:', error));
  };

  return (
    <div className="create-customer-container">
      <h2 className="form-title">Create New Customer</h2>
      <form onSubmit={handleSubmit} className="create-customer-form">
        <div className="form-group">
          <label htmlFor="cust_name">Customer Name:</label>
          <input
            type="text"
            id="cust_name"
            name="cust_name"
            placeholder="Enter customer name"
            value={formData.cust_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cust_mail">Email:</label>
          <input
            type="email"
            id="cust_mail"
            name="cust_mail"
            placeholder="Enter customer email"
            value={formData.cust_mail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="verification_documents">Verification Documents:</label>
          <input
            type="checkbox"
            id="verification_documents"
            name="verification_documents"
            checked={formData.verification_documents}
            onChange={handleChange}
          />
        </div>

        <h3 className="account-section-title">Accounts</h3>
        {formData.accountList.map((account, index) => (
          <div key={index} className="account-group">
            <div className="form-group">
              <label htmlFor={`account_type_${index}`}>Account Type:</label>
              <input
                type="text"
                id={`account_type_${index}`}
                name="account_type"
                placeholder="Enter account type"
                value={account.account_type}
                onChange={(e) => handleAccountChange(index, e)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`balance_${index}`}>Balance:</label>
              <input
                type="number"
                id={`balance_${index}`}
                name="balance"
                placeholder="Enter balance"
                value={account.balance}
                onChange={(e) => handleAccountChange(index, e)}
                required
              />
            </div>
          </div>
        ))}

        <button type="button" className="add-account-button" onClick={addAccount}>
          Add Another Account
        </button>

        <button type="submit" className="submit-button">Create Customer</button>


      </form>

      {response && (
  <div className="customer-response">
    <h3>Customer Created Successfully!</h3>
    <p><strong>Customer Name:</strong> {response.cust_name}</p>
    <p><strong>Email:</strong> {response.cust_mail}</p>
    <p><strong>Verification Documents:</strong> {response.verification_documents ? 'Yes' : 'No'}</p>

    <h4>Accounts</h4>
    <ul>
      {response.accountList.map((account, index) => (
        <li key={index}>
          <p><strong>Account Number:</strong> {account.account_id}</p>
          <p><strong>Account Type:</strong> {account.account_type}</p>
          <p><strong>Balance:</strong> {account.balance}</p>
        </li>
      ))}
    </ul>
  </div>
      )}
    </div>
  );
};

export default CreateCustomerForm;
