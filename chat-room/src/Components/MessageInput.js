import React, { useRef } from 'react';

function MessageInput({ sendMessage }) {
  /***** REFS *****/
  const contentInput = useRef(null);
  return (
    <div className="send-message">
      <input
        ref={contentInput}
        className="message-input"
        type="text"
        placeholder="Type a message.."
        onKeyPress={e => {
          if (e.key === 'Enter') {
            sendMessage(contentInput.current.value);
            contentInput.current.value = '';
          }
        }}
      />
      <button
        className="send-btn"
        onClick={() => {
          sendMessage(contentInput.current.value);
          contentInput.current.value = '';
        }}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default MessageInput;
