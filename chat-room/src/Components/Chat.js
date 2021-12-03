import React from 'react';
// import '../styles/chat.scss';
import '../styles/chat.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import MemberList from './MemberList';

function Chat() {
  const demoData = [
    { author: 'yakov', message: 'Hello', time: moment().format('LT') },
    { author: 'ori', message: 'hello to you', time: moment().format('LT') },
    {
      author: 'rama',
      message: 'hello, I am rama',
      time: moment().format('LT'),
    },
    {
      author: 'ofir',
      message: 'hello, I am ofir',
      time: moment().format('LT'),
    },
    {
      author: 'yakov',
      message: "What's up dear friends",
      time: moment().format('LT'),
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
        <h2>Contact List</h2>
        <MemberList chatData={demoData} />
      </div>
    </div>
  );
}

export default Chat;
