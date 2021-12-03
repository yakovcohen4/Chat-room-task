import React from 'react';
// import '../styles/chat.scss';
import '../styles/chat.scss';

import { Link } from 'react-router-dom';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import MemberList from './MemberList';

function Chat() {
  const demoData = [
    { author: 'yakov', message: 'Hello' },
    { author: 'ori', message: 'hello to you' },
    { author: 'rama', message: 'hello, I am rama' },
    { author: 'ofir', message: 'hello, I am ofir' },
    {
      author: 'yakov',
      message: "What's up dear friends",
    },
  ];
  return (
    <div className="chat-room">
      <div className="messages-list">
        <MessageList chatData={demoData} />
      </div>
      <div className="message-input">
        <MessageInput />
      </div>
      <div className="members-list">
        <h2>Members</h2>
        <MemberList chatData={demoData} />
      </div>
    </div>
  );
}

export default Chat;
