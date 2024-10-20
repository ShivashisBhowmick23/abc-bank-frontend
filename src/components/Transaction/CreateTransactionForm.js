import React, { useState } from 'react';

const CreateTransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    accountId: '',
    amount: '',
    transactionType: '',
    transactionDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="accountId" placeholder="Account ID" onChange={handleChange} />
      <input name="amount" placeholder="Amount" type="number" onChange={handleChange} />
      <input name="transactionType" placeholder="Transaction Type" onChange={handleChange} />
      <input name="transactionDate" placeholder="Transaction Date" type="date" onChange={handleChange} />
      <button type="submit">Create Transaction</button>
    </form>
  );
};

export default CreateTransactionForm;
