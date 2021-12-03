import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login-register.scss';
import axios from 'axios';

function LogIn() {
  const [error, setError] = useState();

  /***** REFS *****/
  const userNameInput = useRef('');
  const passwordInput = useRef('');

  const navigate = useNavigate();

  const login = async () => {
    const userName = userNameInput.current.value;
    const password = passwordInput.current.value;
    try {
      // TODO ADD VALIDATION
      if (!userName || !password) {
        throw new Error({
          status: 400,
          message: 'Username or password missing',
        });
      }
      const response = await axios.post(`http://localhost:8080/users/login`, {
        userName,
        password: String(password),
      });
      if (response.status === 200) {
        navigate('/chat');
      }
      //   return response; //TODO- ADD SUCCESS MESSAGE
      console.log(response.data);
    } catch (error) {
      console.log(error.message); //TODO- ADD ERROR MESSAGE
      setError(error.message);
    }
  };
  return (
    <div className="body">
      <div className="grad"></div>

      <div className="header">
        <div>
          Chat<span>App</span>
        </div>
        <div className="link-to">
          <Link to={'/register'}>
            <span className="link-to">Not a member? create account!</span>
          </Link>
        </div>
      </div>

      <div className="user-input">
        <input
          ref={userNameInput}
          type="text"
          placeholder="Username"
          name="user"
          required
        />
        <input
          ref={passwordInput}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="button" value="Log In" onClick={login}></input>
        <p>{error && <span className="err-mes">{error}</span>}</p>
      </div>
    </div>
  );
}

export default LogIn;
