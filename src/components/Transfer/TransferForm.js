import React, { useState } from 'react';

const TransferForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fromAccountId: '',
    toAccountId: '',
    amount: '',
    transferType: '',
    transferDate: '',
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
      <input name="fromAccountId" placeholder="From Account ID" onChange={handleChange} />
      <input name="toAccountId" placeholder="To Account ID" onChange={handleChange} />
      <input name="amount" placeholder="Amount" type="number" onChange={handleChange} />
      <input name="transferType" placeholder="Transfer Type" onChange={handleChange} />
      <input name="transferDate" placeholder="Transfer Date" type="date" onChange={handleChange} />
      <button type="submit">Create Transfer</button>
    </form>
  );
};

export default TransferForm;
