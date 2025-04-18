import React from 'react';
import './ChatRoom.css';

const messages = {
  aymen: [
    { sender: 'aymen', text: 'Hey, how are you?', time: '2h ago' },
    { sender: 'you', text: 'I am good! Working on some code.', time: '1h ago' },
  ],
  sarra: [
    { sender: 'sarra', text: 'Summer vibes today!', time: '3h ago' },
    { sender: 'you', text: 'That sounds awesome! 😎', time: '2h ago' },
  ],
  nour: [
    { sender: 'nour', text: 'Feeling fresh, just had a jog!', time: '1h ago' },
    { sender: 'you', text: 'Nice, keep it up!', time: '30min ago' },
  ],
  mehdi: [
    { sender: 'mehdi', text: 'Finished a project!', time: '4h ago' },
    { sender: 'you', text: 'Great job! 🎉', time: '3h ago' },
  ],
};

const ChatRoom = ({ activeUser }) => {
  const userMessages = messages[activeUser.username] || [];

  return (
    <div className="chatroom-container">
      {userMessages.map((message, index) => (
        <div key={index} className={`message ${message.sender === 'you' ? 'outgoing' : 'incoming'}`}>
          <div className="message-header">
            <span className="username">{message.sender}</span>
            <span className="message-time">{message.time}</span>
          </div>
          <div className="message-body">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatRoom;
