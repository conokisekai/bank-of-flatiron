import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search transactions..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
