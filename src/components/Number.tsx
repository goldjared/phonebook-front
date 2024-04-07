const Number = ({ person }) => {
  return (
    <div className='person-entry'>
      <li>
        {person.name} {person.number}
      </li>
      <button>delete</button>
    </div>
  );
};
export { Number };
