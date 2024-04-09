import { useState } from 'react';
import type { SearchProps } from '../types/phonebookTypes';

const Search: React.FC<SearchProps> = ({ persons, setFilteredResults }) => {
  const [newSearch, setNewSearch] = useState('');

  const searchItems = (searchValue: any) => {
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
