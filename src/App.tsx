import { useState } from 'react';
import { Number } from './components/Number';
import { Search } from './components/Search';
import { AddForm } from './components/AddForm';
import type { PersonEntry } from './types/phonebookTypes';

const App = () => {
  const [persons, setPersons] = useState<PersonEntry[]>([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [filteredResults, setFilteredResults] = useState<PersonEntry[]>([]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        persons={persons}
        setFilteredResults={setFilteredResults}
      ></Search>
      <AddForm persons={persons} setPersons={setPersons}></AddForm>
      <h2>Numbers</h2>
      <ul>
        {filteredResults.length > 0
          ? filteredResults.map((person) => (
              <Number key={person.name} person={person} />
            ))
          : persons.map((person) => (
              <Number key={person.name} person={person} />
            ))}
      </ul>
    </div>
  );
};

export default App;
