import React from 'react';
// import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({users, searchInput, setSearchInput, expanded, setExpanded}) => {
  


  const handelChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleExpandAll = () => {
    const allIds = users.map((user) => user.id)
    setExpanded(allIds)
  }

  const handleCollapseAll = () => {
    setExpanded([])
  }


  return (
    <div>
      <input 
      value={searchInput}
      type="text" 
      placeholder="Search by name, country, or company" 
      onChange={handelChange}/>
      <button onClick={handleExpandAll}>Expand All</button>
      <button onClick={handleCollapseAll}>Collapse All</button>
    </div>
  );
};

export default SearchBar;
