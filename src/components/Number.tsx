import peopleService from '../services/people';

const Number = ({ person, persons, setPersons }) => {
  const delPerson = () => {
    console.log(person.name);
    peopleService.remove(person.id).then((res) => {
      console.log(res.status);
      // update person state to remove deleted entry
      setPersons(persons.filter((entry) => entry.id !== person.id));
    });
  };
  return (
    <div className='person-entry'>
      <li>
        {person.name} {person.number}
      </li>
      <button onClick={delPerson}>delete</button>
    </div>
  );
};
export { Number };
