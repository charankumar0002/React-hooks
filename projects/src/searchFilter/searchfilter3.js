import React, { useState } from 'react';

function FilterExample3() {
  const [data, setData] = useState([
    { name: 'John', age: 30, gender: 'male', dob: '1992-06-15', company: 'Apple' },
    { name: 'Jane', age: 25, gender: 'female', dob: '1996-09-20', company: 'Google' },
    { name: 'Bob', age: 35, gender: 'male', dob: '1986-04-25', company: 'Microsoft' },
    { name: 'Alice', age: 28, gender: 'female', dob: '1993-11-03', company: 'Amazon' },
    { name: 'David', age: 42, gender: 'male', dob: '1979-02-14', company: 'Apple' },
    { name: 'Sarah', age: 39, gender: 'female', dob: '1982-07-07', company: 'Microsoft' },
  ]);

  const [filterQuery, setFilterQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (event) => {
    setFilterQuery(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const searchMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const filterMatch = filterQuery === '' || item.company.toLowerCase() === filterQuery.toLowerCase();
    return searchMatch && filterMatch;
  });

  const sortedData = filteredData.sort((a, b) => {
    return new Date(a.dob) - new Date(b.dob);
  });

  const companies = [...new Set(data.map((item) => item.company))];

  return (
    <div>
      <label htmlFor="search-bar">Search by Name:</label>
      <input type="text" id="search-bar" value={searchQuery} onChange={handleSearchChange} />

      <label htmlFor="filter-dropdown">Filter by Company:</label>
      <select id="filter-dropdown" value={filterQuery} onChange={handleFilterChange}>
        <option value="">All Companies</option>
        {companies.map((company, index) => (
          <option key={index} value={company}>
            {company}
          </option>
        ))}
      </select>

      <ul>
        {sortedData.map((item, index) => (
          <li key={index}>
            {item.name}, {item.age}, {item.gender}, {item.dob}, {item.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterExample3;
