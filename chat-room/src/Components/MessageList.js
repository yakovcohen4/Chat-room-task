import React from 'react';
import Message from './Message';

function MessageList({ chatData }) {
  return (
    <ul id="chat">
      {chatData.map(({ userName, content, timeStamp }) => (
        <Message
          message={content}
          author={userName}
          time={timeStamp}
          key={content + userName + timeStamp}
        />
      ))}
    </ul>
  );
}

export default MessageList;
