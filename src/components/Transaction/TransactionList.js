import React from 'react';
import { Link } from 'react-router-dom';

const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.transactionId}>
          <Link to={`/transactions/${transaction.transactionId}`}>
            Transaction ID: {transaction.transactionId} | Amount: {transaction.amount} | Type: {transaction.transactionType}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
