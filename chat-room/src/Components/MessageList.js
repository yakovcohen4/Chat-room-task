import React from 'react';
import Message from './Message';

function MessageList({ chatData }) {
  return (
    <ul id="chat">
      {chatData.map(({ author, message, time }) => (
        <Message message={message} author={author} time={time} key={message} />
      ))}
    </ul>
  );
}

export default MessageList;
