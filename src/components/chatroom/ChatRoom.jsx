import React, { useState } from 'react';
import './ChatRoom.css';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; // flech

const ChatRoom = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: 'Hey!', sender: 'me' },
    { text: 'Hi there!', sender: 'other' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'me' }]);
      setInput('');
    }
  };

  return (
    <div className="chatroom-container">
      <div className="chatroom-header">
        <FiArrowLeft
          className="back-arrow"
          size={24}
          onClick={() => navigate('/chat')}
        />
        <span>{username}</span>
      </div>

      <div className="chatroom-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chatroom-footer">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
