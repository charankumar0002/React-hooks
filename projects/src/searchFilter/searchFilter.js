import React, { useState } from 'react';

function FilterExample() {
  const [data, setData] = useState([
    { name: 'John', age: 30, gender: 'male', dob: '1992-06-15' },
    { name: 'Jane', age: 25, gender: 'female', dob: '1996-09-20' },
    { name: 'Bob', age: 35, gender: 'male', dob: '1986-04-25' },
    { name: 'Alice', age: 28, gender: 'female', dob: '1993-11-03' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleGenderFilter = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleAgeFilter = (event) => {
    setAgeFilter(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const genderMatch =  genderFilter === 'all' ? true : item.gender.toLowerCase() === genderFilter.toLowerCase();
    const ageMatch = ageFilter === '' ? true : item.age >= parseInt(ageFilter);
    return nameMatch && genderMatch && ageMatch;
  });

  return (
    <div>
      <label htmlFor="search-bar">Search:</label>
      <input type="text" id="search-bar" value={searchQuery} onChange={handleSearch} />

      {/* <label htmlFor="gender-filter">Fi</label> */}
      <select  value={genderFilter} onChange={handleGenderFilter}>
        <option value="all">All</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="dob">DOB</option>
     
      </select>

      {/* <label htmlFor="age-filter">Filter by Age:</label>
      <input type="number" id="age-filter" value={ageFilter} onChange={handleAgeFilter} /> */}

      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
           <div key={index} style={{ margin: '30px' }}>
       <div>{`Name: ${item.name}`}</div>
       <div>{`Age: ${item.age}`}</div>
       <div>{`Gender: ${item.gender}`}</div>
       <div>{`Date of Birth: ${item.dob}`}</div>
       </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterExample;
