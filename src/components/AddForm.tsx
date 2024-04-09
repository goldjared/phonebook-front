import type { PersonEntry, PersonProps } from '../types/phonebookTypes';
import { useState } from 'react';
import peopleService from '../services/people';

const randomVal = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const numberGen = (): string =>
  randomVal(100) + '-' + randomVal(100) + '-' + randomVal(1000000);

const AddForm: React.FC<PersonProps> = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState(numberGen());

  const handleNameChange = (event: any) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event: any) => {
    console.log(event.target.value);
    setNewNum(event.target.value);
  };

  const addPerson = (event: any) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const phoneObj: PersonEntry = {
      name: newName,
      number: newNum,
      id: -1,
    };
    let personExists: boolean = persons.some(
      (person: PersonEntry) =>
        person.name.toLowerCase() === newName.toLowerCase()
    );
    if (personExists) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      // http://001.fly.dev/notes
      peopleService.create(phoneObj).then((res) => {
        console.log(res);
        phoneObj.id = res.id;
        setPersons(persons.concat(phoneObj));
        setNewName('');
        setNewNum(numberGen());
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
          number: <input value={newNum} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  );
};

export { AddForm };
