import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to ABC Bank</h1>
      <div style={styles.navContainer}>
        <div style={styles.card}>
          <h2>Customers</h2>
          <p>Manage customers and their details.</p>
          <Link to="/customers">
            <button style={styles.button}>View Customers</button>
          </Link>
          <Link to="/customers/new">
            <button style={styles.button}>Create Customer</button>
          </Link>
        </div>

        <div style={styles.card}>
          <h2>Transactions</h2>
          <p>Manage bank transactions.</p>
          <Link to="/transactions">
            <button style={styles.button}>View Transactions</button>
          </Link>
          <Link to="/transactions/new">
            <button style={styles.button}>Create Transaction</button>
          </Link>
        </div>

        <div style={styles.card}>
          <h2>Transfers</h2>
          <p>Manage money transfers between accounts.</p>
          <Link to="/transfers">
            <button style={styles.button}>View Transfers</button>
          </Link>
          <Link to="/transfers/new">
            <button style={styles.button}>Create Transfer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
  },
  card: {
    width: '30%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  button: {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default HomePage;
