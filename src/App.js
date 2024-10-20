import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateCustomerPage from './pages/CustomerPages/CreateCustomerPage';
import CustomerListPage from './pages/CustomerPages/CustomerListPage';
import CustomerDetailsPage from './pages/CustomerPages/CustomerDetailsPage';
import CreateTransactionPage from './pages/TransactionPages/CreateTransactionPage';
import TransactionListPage from './pages/TransactionPages/TransactionListPage';
import TransactionDetailsPage from './pages/TransactionPages/TransactionDetailsPage';
import CreateTransferPage from './pages/TransferPages/CreateTransferPage';
import TransferListPage from './pages/TransferPages/TransferListPage';
import TransferDetailsPage from './pages/TransferPages/TransferDetailspage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomerListPage />} />
        <Route path="/customers/new" element={<CreateCustomerPage />} />
        <Route path="/customers/:id" element={<CustomerDetailsPage />} />
        
        {/* Transaction Routes */}
        <Route path="/transactions" element={<TransactionListPage />} />
        <Route path="/transactions/new" element={<CreateTransactionPage />} />
        <Route path="/transactions/:id" element={<TransactionDetailsPage />} />

        {/* Transfer Routes */}
        <Route path="/transfers" element={<TransferListPage />} />
        <Route path="/transfers/new" element={<CreateTransferPage />} />
        <Route path="/transfers/:id" element={<TransferDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
