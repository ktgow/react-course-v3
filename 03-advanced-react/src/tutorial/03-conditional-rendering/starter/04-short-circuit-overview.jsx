import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('Susan');

  return <>
           <h2>short circuit overview</h2>
           <div>Text: {text || 'Falsy'}</div>
           <div>Name: {name || 'Anonymous'}</div>
           <div>Text and: {text && 0}</div>
           <div>Name and: {name && 0}</div>
         </>;
};
export default ShortCircuitOverview;
