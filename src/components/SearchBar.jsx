import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.module.css';

const SearchBar = ({ onSearch, placeholder = "Search transactions..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        className={style.searchInput}
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <button 
          className={style.clearButton} 
          onClick={clearSearch}
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchBar;