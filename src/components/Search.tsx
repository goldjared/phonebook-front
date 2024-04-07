import { useState } from 'react';

const Search = ({ persons, setFilteredResults }) => {
  const [newSearch, setNewSearch] = useState('');

  const searchItems = (searchValue) => {
    setNewSearch(searchValue);
    const filteredData = persons.filter((item) => {
      return Object.values(item)
        .join('')
        .toLowerCase()
        .includes(newSearch.toLowerCase());
    });
    // resets filtered to empty if the search input is cleared
    searchValue === ''
      ? setFilteredResults([])
      : setFilteredResults(filteredData);
  };
  return (
    <div className='form-input'>
      search:
      <input value={newSearch} onChange={(e) => searchItems(e.target.value)} />
    </div>
  );
};

export { Search };
