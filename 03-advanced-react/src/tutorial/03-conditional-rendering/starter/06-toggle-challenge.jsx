import {useState} from 'react';

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);
  return <>
           <h2>toggle challenge</h2>
           {value ? <h1>Value is set</h1> : <h3>Value is not set</h3>}
           <button className='btn' onClick={() => setValue(!value)}>Click</button>
         </>;
};

export default ToggleChallenge;
