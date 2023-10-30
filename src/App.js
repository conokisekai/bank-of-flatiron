import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('category'); 

  useEffect(() => {
    fetch('http://localhost:3000/transactions') 
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortChange = (property) => {
    setSortBy(property);
  };

  const filteredTransactions = transactions
    .filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionForm onFormSubmit={addTransaction} />
      <SearchBar onSearch={handleSearch} />
      <TransactionTable
        transactions={filteredTransactions}
        sortBy={sortBy} 
        onDelete={deleteTransaction}
        onSortChange={handleSortChange} 
      />
    </div>
  );
};

export default App;
