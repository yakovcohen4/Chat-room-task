import React, { useState } from 'react';

function Message({ message, author, time }) {
  const [userName, setUserName] = useState('yakov'); // Demo to my user name - give different class name
  return (
    <div>
      <li className={userName === author ? 'me' : 'you'}>
        <div className="entete">
          <span className="status green"></span>
          <h2>{author}</h2> <h3>{time}</h3>
        </div>
        <div className="message">{message}</div>
      </li>
    </div>
  );
}

export default Message;
