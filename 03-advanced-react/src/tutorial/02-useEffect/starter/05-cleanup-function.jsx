import {useState, useEffect} from 'react';

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  return <>
           {value && <SomeComponent/>}
           <button className='btn' onClick={() => setValue(!value)}>Toggle</button>
         </>;
};

const SomeComponent = () => {
  useEffect(() => {
    console.log('Rendering SomeComponent.');
    const intervalId = setInterval(() => {
      console.log('Interval triggered.');
    }, 1000);

    return () => {
      console.log('Clearing interval', intervalId);
      clearInterval(intervalId);
    };
  }, []);
  return <div>Hello</div>;
};

export default CleanupFunction;
