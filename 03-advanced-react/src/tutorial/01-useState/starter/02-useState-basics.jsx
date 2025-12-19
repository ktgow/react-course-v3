import {useState} from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
    console.log('Incremented count from', count);
  };
  return <div>
           <h2>useState basics</h2>
           <div>Count: {count}</div>
           <button type="button" className="btn" onClick={incrementCount}>Click me</button>
         </div>;
};

export default UseStateBasics;
