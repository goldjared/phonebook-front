import { Number } from '../components/Number';
import type { PersonDisplay } from '../types/phonebookTypes';

const PersonDisplay: React.FC<PersonDisplay> = ({
  filteredResults,
  persons,
  setPersons,
}) => {
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
