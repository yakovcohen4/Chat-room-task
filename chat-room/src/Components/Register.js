import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login-register.scss';

function Register() {
  /***** REFS *****/
  const userNameInput = useRef('');
  const passwordInput = useRef('');
  const emailInput = useRef('');

  const navigate = useNavigate();

  const handleClick = () => {
    console.log(userNameInput.current.value);
    console.log(passwordInput.current.value);
    console.log(emailInput.current.value);
    navigate('/chat');
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
        <input type="button" value="Sing Up" onClick={handleClick}></input>
      </div>
    </div>
  );
}

export default Register;
