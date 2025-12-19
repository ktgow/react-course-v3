import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 20,
    hobby: 'Programming',
  });

  const displayPerson = () => {
    setPerson({
      name: 'John',
      age: 28,
      hobby: 'Biking',
    });
  };

  return <>
           <h2>{person.name}</h2>
           <h3>{person.age}</h3>
           <h3>Enjoys: {person.hobby}</h3>
           <button type="button" className="btn" onClick={displayPerson}>Click me</button>
         </>;
};

export default UseStateObject;
