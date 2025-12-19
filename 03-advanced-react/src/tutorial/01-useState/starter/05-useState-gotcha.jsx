import {useState} from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const incrementValue = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 1000);
  };
  
  return <>
           <h2>Count: {value}</h2>
           <button className="btn" onClick={incrementValue}>Delayed Increment</button>
         </>;
};

export default UseStateGotcha;
