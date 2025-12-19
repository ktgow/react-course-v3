import {data} from '../../../data';
import {useState} from 'react';

const UseStateArray = () => {
  const [arrayData, setArrayData] = useState(data);
  const removeEntry = (removeId) => {
    setArrayData(arrayData.filter(({id}) => id !== removeId));
  };
  const clearAll = () => setArrayData([]);

  return <>
           <h2>useState array example</h2>
           <ul>
             {
               arrayData.map(({id, name}) => {
                 return <li key={id}>
                          {name}
                          <button type="button" onClick={() => removeEntry(id)}>Remove</button>
                        </li>
               })
             }
           </ul>
           <button type="button" onClick={clearAll} className="btn">Clear all</button>
         </>;
};

export default UseStateArray;
