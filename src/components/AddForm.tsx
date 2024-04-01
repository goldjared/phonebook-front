import type { PersonEntry } from '../types/phonebookTypes';
import { useState } from 'react';

const AddForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const phoneObj: PersonEntry = {
      name: newName,
      number: newNumber,
      id: 123,
    };
    let personExists: boolean = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (personExists) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(phoneObj));
    }

    setNewName('');
    setNewNumber('');
    // setNewSearch('');
    // setFilteredResults([]);
  };

  return (
    <>
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
    </>
  );
};

export { AddForm };
