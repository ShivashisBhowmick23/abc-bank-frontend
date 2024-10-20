import React from 'react';

const TransferDetails = ({ transfer }) => {
  return (
    <div>
      <h2>Transfer ID: {transfer.transferId}</h2>
      <p>From Account ID: {transfer.fromAccount.accountId}</p>
      <p>To Account ID: {transfer.toAccount.accountId}</p>
      <p>Amount: {transfer.amount}</p>
      <p>Transfer Type: {transfer.transferType}</p>
      <p>Transfer Date: {transfer.transferDate}</p>
    </div>
  );
};

export default TransferDetails;
