import React from 'react';

function MessageInput() {
  return (
    <div className="send-message">
      <input
        className="message-input"
        type="text"
        placeholder="Write your message.."
      />
      <button className="send-btn">send</button>
    </div>
  );
}

export default MessageInput;
