import { useState, useEffect } from 'react';
import { Search } from './components/Search';
import { AddForm } from './components/AddForm';
import { PersonDisplay } from './components/PersonDisplay';
import type { PersonEntry } from './types/phonebookTypes';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredResults, setFilteredResults] = useState<PersonEntry[]>([]);

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3000/notes').then((res) => {
      console.log('promise fulfilled');
      setPersons(res.data);
    });
  }, []);

  console.log('render', persons.length, 'notes');

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        persons={persons}
        setFilteredResults={setFilteredResults}
      ></Search>
      <AddForm persons={persons} setPersons={setPersons}></AddForm>
      <PersonDisplay
        filteredResults={filteredResults}
        persons={persons}
      ></PersonDisplay>
    </div>
  );
};

export default App;
