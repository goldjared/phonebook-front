const Number = ({ person }) => {
  return (
    <>
      <li>
        {person.name} {person.number}
      </li>
      <button>delete</button>
    </>
  );
};
export { Number };
