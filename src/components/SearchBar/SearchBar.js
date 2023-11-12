import React from 'react';
// import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({searchInput, setSearchInput}) => {
  


  const handelChange = (e) => {
    setSearchInput(e.target.value)
  }

  console.log(searchInput)

  return (
    <input 
    value={searchInput}
    type="text" 
    placeholder="Search by name, country, or company" 
    onChange={handelChange}/>
  );
};

export default SearchBar;
