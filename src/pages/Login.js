import { useState, Fragment } from 'react';

export default function Login(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform login process
  const login = () => {
    setAuth(true);
    let id = Math.floor(Math.random() * 3 + 1);
    if (id === 1) {
      setUser('Lisa');
    }
    else if (id === 2) {
      setUser('Gonzo');
    }
    else if (id === 3) {
      setUser('Kehan');
    }
  }

  // Perform logout process
  const logout = () => {
    setAuth(false);
    setUser(null);
  }

  return (
    <>
      {!auth &&
        <button
          className="btn btn-primary border-2 border-teal font-header text-3xl my-2.5"
          onClick={() => login()}
        >
          SIGN IN
        </button>
      }
      {auth &&
        <button
          className="btn btn-primary border-2 border-teal font-header text-3xl my-2.5"
        onClick={() => logout()}
        >
        LOGOUT {user}
        </button>
      }
    </>
  )
}