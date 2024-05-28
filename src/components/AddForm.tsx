import type { PersonEntry, PersonProps } from '../types/phonebookTypes';
import { SetStateAction, useState } from 'react';
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
      id: '',
    };
    // undefined id if name does not exist
    let personId: string | undefined = persons.find(
      (person: PersonEntry) =>
        person.name.toLowerCase() === newName.toLowerCase()
    )?.id;
    // if the person name exists, we update said person's number
    if (personId != undefined) {
      alert(
        `${newName} is already added to the phonebook, updating number for ${newName}`
      );

      phoneObj.id = personId;
      peopleService.update(personId, phoneObj).then((res) => {
        console.log(res);
      });
      console.log(persons + ' this is persons state');

      // update state with new number to reflect update
      setPersons(
        persons.map((updatedPerson: any) => {
          if (updatedPerson.id === personId) {
            return { ...updatedPerson, number: newNum };
          }
          return { ...updatedPerson };
        })
      );
    } else {
      peopleService.create(phoneObj).then((res) => {
        console.log(res);
        phoneObj.id = res.id;
        setPersons(persons.concat(phoneObj));
      });
    }
    setNewName('');
    setNewNum(numberGen());

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
