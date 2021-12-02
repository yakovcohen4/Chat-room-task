import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();

  const loginInput = useRef(null);
  const handleClick = () => {
    console.log(loginInput.current.value);
    navigate('/chat');
  };
  return (
    <div id="LogIn">
      <h1>Log In</h1>
      <form className="forms">
        <div className="container">
          <span>Username</span>
          <input
            ref={loginInput}
            type="text"
            placeholder="Enter User name"
            required
          />
          <button type="submit" onClick={handleClick}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
