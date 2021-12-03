import React, { useState, useContext } from 'react';
// import '../styles/chat.scss';
import '../styles/chat.scss';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import MemberList from './MemberList';
import { UserContext } from './UserContext.js';

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
  /* STATES */
  // const { userName } = useContext(UserContext);
  const userName = 'yakov';
  const [messages, setMessages] = useState([]);

  const sendMessage = async content => {
    try {
      console.log(userName, content);
      const response = await axios.post(
        `http://localhost:8080/chat/send-message`,
        {
          userName,
          content,
          timeStamp: String(moment().format('LT')),
        }
      );
      console.log(response.data); // TODO - ADD SUCCESS MESSAGE
    } catch (error) {
      console.log(error); // TODO - ADD ERROR MESSAGE
    }
  };
  return (
    <div className="chat-room">
      <div className="messages-list">
        <MessageList chatData={demoData} />
      </div>
      <div className="message-input">
        <MessageInput sendMessage={sendMessage} />
      </div>
      <div className="members-list">
        <h2>Contact List</h2>
        <MemberList chatData={demoData} />
      </div>
    </div>
  );
}

export default Chat;
