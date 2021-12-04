import React, { useEffect, useState, useContext } from 'react';
import '../styles/chat.scss';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import MemberList from './MemberList';
import { UserContext } from './UserContext.js';

function Chat() {
  /* STATES */
  // const { userName } = useContext(UserContext);
  const userName = sessionStorage.getItem('userName');
  console.log(userName);
  const [messages, setMessages] = useState([]);

  /* useEffect */
  useEffect(() => {
    let eventSource = new EventSource('http://localhost:8080/chat/get-message');
    eventSource.onmessage = e =>
      setMessages(prevMessages => {
        const messages = JSON.parse(e.data);
        return messages.length ? messages : [...prevMessages, messages];
      });
  }, []);

  /* Function */
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
        <MessageList chatData={messages} />
      </div>
      <div className="message-input">
        <MessageInput sendMessage={sendMessage} />
      </div>
      <div className="members-list">
        <h2>Contact List</h2>
        <MemberList chatData={messages} />
      </div>
    </div>
  );
}

export default Chat;
