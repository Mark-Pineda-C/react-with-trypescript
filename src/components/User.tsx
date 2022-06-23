import { useState } from 'react';

interface UserInterface {
    uid: string;
    name: string;
}

export const User = () => {
    const [user, setUser] = useState<UserInterface>();

    const login = () => {
        setUser({
            uid: '123123',
            name: 'mark pineda'
        })
    }

  return (
    <div className='mt-1'>
        <h3>User</h3>
        <button
            onClick={login} 
            className='btn btn-outline-primary'>
                Login
        </button>
        {
            (!user)
                ? <pre>No hay usuario</pre>
                : <pre>{ JSON.stringify(user)}</pre> 
        }
    </div>
  )
}
