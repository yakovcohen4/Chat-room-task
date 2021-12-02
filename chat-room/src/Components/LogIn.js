import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login.scss';

function LogIn() {
  const navigate = useNavigate();

  const loginInput = useRef(null);
  const handleClick = () => {
    console.log(loginInput.current.value);
    navigate('/chat');
  };
  return (
    <div className="body">
      <div className="grad"></div>

      <div className="header">
        <div>
          Chat<span>App</span>
        </div>
        <div className="register">
          <Link to={'/register'}>
            <span className="register">Not a member? create account!</span>
          </Link>
        </div>
      </div>

      <div className="login">
        <input
          ref={loginInput}
          type="text"
          placeholder="username"
          name="user"
          required
        />
        <input
          ref={loginInput}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="button" value="Login" onClick={handleClick}></input>
      </div>
    </div>
  );
}

export default LogIn;
