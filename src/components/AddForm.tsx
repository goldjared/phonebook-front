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
    let personId: string | undefined = persons.find(
      (person: PersonEntry) =>
        person.name.toLowerCase() === newName.toLowerCase()
    )?.id;

    if (personId != undefined) {
      alert(
        `${newName} is already added to the phonebook, updating number for ${newName}`
      );

      phoneObj.id = personId;
      peopleService.update(personId, phoneObj).then((res) => {
        console.log(res);
      });
      console.log(persons + ' this is persons state');
      // setPersons(
      //   persons.map((updatedPerson: any) => {
      //     if (updatedPerson.id === personId) {
      //       // Create a *new* object with changes
      //       return { ...persons, number: newNum };
      //     } else {
      //       // No changes
      //       return persons;
      //     }
      //   })
      // );
      let counter: number = 0;
      // persons.map((updatedPerson: any) => {
      //   // Create a *new* object with changes
      //   console.log(updatedPerson);
      // });
      setPersons(
        persons.map((updatedPerson: any) => {
          // Create a *new* object with changes
          if (counter === 2) {
            console.log('counter is 2');
            return { ...updatedPerson, name: 'and_test' };
          }
          counter++;
          console.log(counter);
          return { ...updatedPerson };
        })
      );
      //      setPersons({ ...persons });
      //setPersons({...persons, phoneObj}));
    } else {
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
