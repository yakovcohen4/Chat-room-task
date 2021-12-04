import React from 'react';

function Message({ message, author, time }) {
  const userName = sessionStorage.getItem('userName'); // get username - me or you ?
  return (
    <div>
      <li className={userName === author ? 'me' : 'you'}>
        <div className="entete">
          {/* <span className="status green"></span> */}
          <h2>{userName === author ? 'you' : author}</h2> <h3>{time}</h3>
        </div>
        <div className="message">{message}</div>
      </li>
    </div>
  );
}

export default Message;
