import { Number } from '../components/Number';

const PersonDisplay = ({ filteredResults, persons }) => {
  return (
    <>
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
    </>
  );
};

export { PersonDisplay };
