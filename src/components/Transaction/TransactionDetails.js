import React from 'react';

const TransactionDetails = ({ transaction }) => {
  return (
    <div>
      <h2>Transaction ID: {transaction.transactionId}</h2>
      <p>Account ID: {transaction.account.accountId}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Transaction Type: {transaction.transactionType}</p>
      <p>Transaction Date: {transaction.transactionDate}</p>
    </div>
  );
};

export default TransactionDetails;
