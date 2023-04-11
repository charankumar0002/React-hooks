import React, { useState } from 'react';

function FilterExample4() {
  const [data, setData] = useState([
    { name: 'John', age: 30, gender: 'male', dob: '1992-06-15', company: 'Apple' },
    { name: 'Jane', age: 25, gender: 'female', dob: '1996-09-20', company: 'Google' },
    { name: 'Bob', age: 35, gender: 'male', dob: '1986-04-25', company: 'Microsoft' },
    { name: 'Alice', age: 28, gender: 'female', dob: '1993-11-03', company: 'Amazon' },
    { name: 'David', age: 42, gender: 'male', dob: '1979-02-14', company: 'Apple' },
    { name: 'Sarah', age: 39, gender: 'female', dob: '1982-07-07', company: 'Microsoft' },
  ]);

  const [searchNameQuery, setSearchNameQuery] = useState('');
  const [searchAgeQuery, setSearchAgeQuery] = useState('');
  const [searchDOBQuery, setSearchDOBQuery] = useState('');
  const [searchCompanyQuery, setSearchCompanyQuery] = useState('');

  const handleNameSearch = (event) => {
    setSearchNameQuery(event.target.value);
  };

  const handleAgeSearch = (event) => {
    setSearchAgeQuery(event.target.value);
  };

  const handleDOBSearch = (event) => {
    setSearchDOBQuery(event.target.value);
  };

  const handleCompanySearch = (event) => {
    setSearchCompanyQuery(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchNameQuery.toLowerCase());
    const ageMatch = item.age.toString().includes(searchAgeQuery);
    const dobMatch = item.dob.includes(searchDOBQuery);
    const companyMatch = item.company.toLowerCase().includes(searchCompanyQuery.toLowerCase());
    return nameMatch && ageMatch && dobMatch && companyMatch;
  });

  const sortedData = filteredData.sort((a, b) => {
    return new Date(a.dob) - new Date(b.dob);
  });

  return (
    <div>
      <label htmlFor="name-search-bar">Search by Name:</label>
      <input type="text" id="name-search-bar" value={searchNameQuery} onChange={handleNameSearch} />

      <label htmlFor="age-search-bar">Search by Age:</label>
      <input type="number" id="age-search-bar" value={searchAgeQuery} onChange={handleAgeSearch} />

      <label htmlFor="dob-search-bar">Search by Date of Birth:</label>
      <input type="date" id="dob-search-bar" value={searchDOBQuery} onChange={handleDOBSearch} />

      <label htmlFor="company-search-bar">Search by Company:</label>
      <input type="text" id="company-search-bar" value={searchCompanyQuery} onChange={handleCompanySearch} />


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

export default FilterExample4;
