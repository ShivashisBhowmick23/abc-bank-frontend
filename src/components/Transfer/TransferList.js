import React from 'react';
import { Link } from 'react-router-dom';

const TransferList = ({ transfers }) => {
  return (
    <ul>
      {transfers.map((transfer) => (
        <li key={transfer.transferId}>
          <Link to={`/transfers/${transfer.transferId}`}>
            Transfer ID: {transfer.transferId} | Amount: {transfer.amount} | Type: {transfer.transferType}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TransferList;
