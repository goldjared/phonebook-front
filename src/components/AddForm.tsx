import axios from 'axios';
import type { PersonEntry } from '../types/phonebookTypes';
import { useState } from 'react';
import peopleService from '../services/people';

const AddForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newId, setNewId] = useState('');

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewId(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const phoneObj: PersonEntry = {
      name: newName,
      id: newId,
    };
    let personExists: boolean = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (personExists) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      // http://001.fly.dev/notes
      peopleService.create(phoneObj).then((res) => {
        console.log(res);

        setPersons(persons.concat(phoneObj));
        setNewName('');
        setNewId('');
      });
    }

    // setNewSearch('');
    // setFilteredResults([]);
  };

  return (
    <>
      <h2>Add a New</h2>
      <form onSubmit={addPerson}>
        <div className='form-input'>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div className='form-input'>
          id: <input value={newId} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  );
};

export { AddForm };
