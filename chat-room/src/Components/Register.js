import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login-register.scss';
import axios from 'axios';
import BASEURL from './App';
import { Error } from 'mongoose';

function Register() {
  const [error, setError] = useState();

  /***** REFS *****/
  const userNameInput = useRef('');
  const passwordInput = useRef('');
  const emailInput = useRef('');

  const navigate = useNavigate();

  const register = async () => {
    const userName = userNameInput.current.value;
    const password = passwordInput.current.value;
    const email = emailInput.current.value;
    try {
      // TODO ADD VALIDATION
      if (!userName || !password || !email) {
        throw new Error({ status: 400, message: 'Missing details' });
      }
      const response = await axios.post(
        `http://localhost:8080/users/register`,
        {
          userName,
          password: String(password),
          email,
        }
      );
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
          <Link to={'/'}>
            <span className="link-to">Have a member? Log In!</span>
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
          ref={emailInput}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          ref={passwordInput}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="button" value="Sing Up" onClick={register}></input>
        <p>{error && <span className="err-mes">{error}</span>}</p>
      </div>
    </div>
  );
}

export default Register;
