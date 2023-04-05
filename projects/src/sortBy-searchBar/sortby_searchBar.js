import React, { useState } from 'react';

function SortAndFilterExample() {
  const [data, setData] = useState([
    { name: 'John', age: 30, gender: 'male', dob: '1992/06/15' },
    { name: 'Jane', age: 25, gender: 'female', dob: '1996/09/20' },
    { name: 'Bob', age: 35, gender: 'male', dob: '1986/04/25' },
    { name: 'Alice', age: 28, gender: 'female', dob: '1993/11/03' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.age.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||

     item.dob.toString().toLowerCase().includes(searchQuery.toLowerCase())
   
  );


  const sortedData = filteredData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
   
    if(sortBy === 'Date of Birth') {
        const dateA = new Date(a[sortBy]);
        const dateB = new Date(b[sortBy]);
        return dateA - dateB;
    }
    return 0;
    
  });

 
  return (
    <div>
      <label htmlFor="search-bar">Search:</label>
      <input type="text" id="search-bar" value={searchQuery} onChange={handleSearch} />

      <label htmlFor="sort-by">Sort By:</label>
      <select id="sort-by" value={sortBy} onChange={handleSort}>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="gender">Gender</option>
        <option value="dob">Date of Birth</option>
      </select>

      <ul>
        {sortedData.map((item, index) => (
       
       <div key={index} style={{ margin: '30px' }}>
       <div>{`Name: ${item.name}`}</div>
       <div>{`Age: ${item.age}`}</div>
       <div>{`Gender: ${item.gender}`}</div>
       <div>{`Date of Birth: ${item.dob}`}</div>
       
     </div>
        ))}
      </ul>
    </div>
  );
}

export default SortAndFilterExample;
