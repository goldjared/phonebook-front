import { Number } from '../components/Number';

const PersonDisplay = ({ filteredResults, persons, setPersons }) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {filteredResults.length > 0
          ? filteredResults.map((person) => (
              <Number
                key={person.id}
                person={person}
                persons={persons}
                setPersons={setPersons}
              />
            ))
          : persons.map((person) => (
              <Number
                key={person.id}
                person={person}
                persons={persons}
                setPersons={setPersons}
              />
            ))}
      </ul>
    </>
  );
};

export { PersonDisplay };
