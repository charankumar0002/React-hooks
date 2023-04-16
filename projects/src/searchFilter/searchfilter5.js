import React, { useState } from 'react';

const FilterExample5= ({ userData }) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const filteredData = userData.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData =
    sort === 'low'
      ? filteredData.sort((a, b) => a.percentage.localeCompare(b.percentage))
      : sort === 'high'
      ? filteredData.sort((a, b) => b.percentage.localeCompare(a.percentage))
      : filteredData;

  return (
    <div>
      <div>
        <label>
          Search:{' '}
          <input type="text" value={search} onChange={handleSearchChange} />
        </label>
      </div>
      <div>
        <label>
          Sort:{' '}
          <select value={sort} onChange={handleSortChange}>
            <option value="">Select an option</option>
            <option value="low">Lowest to highest percentage</option>
            <option value="high">Highest to lowest percentage</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Experience</th>
            <th>Percentage</th>
            <th>Job Role</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.experience}</td>
              <td>{user.percentage}</td>
              <td>{user.jobRole}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterExample5;
