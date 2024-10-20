import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Adjust the URL as needed

// ---- Customer APIs ----
export const createCustomer = (customerData) => axios.post(`${API_URL}/bank/add/single-customer`, customerData);
export const getAllCustomers = () => axios.get(`${API_URL}/bank/customers`);
export const getCustomerById = (id) => axios.get(`${API_URL}/customers/${id}`);

// ---- Transaction APIs ----
export const createTransaction = (transactionData) => axios.post(`${API_URL}/transactions`, transactionData);
export const getAllTransactions = () => axios.get(`${API_URL}/transactions`);
export const getTransactionById = (id) => axios.get(`${API_URL}/transactions/${id}`);

// ---- Transfer APIs ----
export const createTransfer = (transferData) => axios.post(`${API_URL}/transfers`, transferData);
export const getAllTransfers = () => axios.get(`${API_URL}/transfers`);
export const getTransferById = (id) => axios.get(`${API_URL}/transfers/${id}`);
