import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch transaction data from the API endpoint
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const addTransaction = newTransaction => {
    // Add the new transaction to the transactions state
    setTransactions([...transactions, newTransaction]);
    // In a real application, you might also want to send the new transaction to the API
  };

  const handleSearch = term => {
    // Update the search term state
    setSearchTerm(term);
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionForm onFormSubmit={addTransaction} />
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
