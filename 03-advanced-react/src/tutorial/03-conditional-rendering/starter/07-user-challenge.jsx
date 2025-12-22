import {useState} from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name: 'me'});
  };
  const logout = () => {
    setUser(null);
  };
  
  return <>
           <h2>user challenge</h2>
           {user ?
            <>
              <div>Hello, {user.name}</div>
              <button className='btn' onClick={logout}>Logout</button>
            </>
            :
            <>
              <div>Please log in</div>
              <button className='btn' onClick={login}>Login</button>
            </>}
         </>;
};

export default UserChallenge;
