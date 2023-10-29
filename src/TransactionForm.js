import React, { useState } from 'react';

const TransactionForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(formData);
    // Reset form fields
    setFormData({
      description: '',
      amount: '',
      category: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleInputChange}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
