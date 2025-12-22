import {useState, useEffect} from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.log('Response not ok:', response.status);
        } else {
          const json = await response.json();
          console.log('Response:', json);
          setUsers(json);
        }
      } catch(error) {
        console.log('Caught error:', error);
      }
    };
    doFetch();
  }, []);
  
  return <>
           <h2>fetch data example</h2>
           <ul className='users'>
             {
               users.map(({id, login, avatar_url, html_url}) => {
                 return <li className='user' key={id}>
                          <img src={avatar_url} alt={login} />
                          <div>
                            <h5>{login}</h5>
                            <a href={html_url}>Profile</a>
                          </div>
                        </li>;
               })
             }
           </ul>
         </>;
};
export default FetchData;
