import React from 'react';
import { createTransaction } from '../../api';
import CreateTransactionForm from '../../components/Transaction/CreateTransactionForm';

const CreateTransactionPage = () => {
  const handleCreateTransaction = (transactionData) => {
    createTransaction(transactionData)
      .then(() => alert('Transaction created successfully!'))
      .catch((error) => console.error('Error creating transaction:', error));
  };

  return (
    <div>
      <h2>Create Transaction</h2>
      <CreateTransactionForm onSubmit={handleCreateTransaction} />
    </div>
  );
};

export default CreateTransactionPage;
