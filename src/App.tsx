import { useState } from 'react';
import { Number } from './components/Number';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'John Smith' }]);
  const [newName, setNewName] = useState('');
  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const phoneObj = {
      name: newName,
    };

    if(persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
      setNewName('');
      return;
    }

    setPersons(persons.concat(phoneObj));
    setNewName('');
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Number key={person.name} number={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
