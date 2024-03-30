import { useState } from 'react';
import { Number } from './components/Number';

interface FilteredProperties {
  name: string;
  number: string;
  id: number;
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])  
  const [filteredResults, setFilteredResults] = useState<FilteredProperties[]>([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const phoneObj = {
      name: newName,
      number: newNumber,
      id: 123,
    };

    if(persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(phoneObj));
    }

    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const searchItems = (searchValue) => {
    setNewSearch(searchValue)
   const filteredData = persons.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(newSearch.toLowerCase())
    }) 
    setFilteredResults(filteredData);
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          search: <input value={newSearch} onChange={(e) => searchItems(e.target.value)} />
        </div>
      <div>debug: {newName}</div>
      <h2>Add a New</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Number key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
