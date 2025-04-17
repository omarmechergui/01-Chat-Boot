import React from 'react';
import './Chat.css';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; // flech

const conversations = [
  { username: 'aymen', img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', lastMessage: 'Hey, how are you?' },
  { username: 'sarra', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e', lastMessage: 'What\'s up?' },
  { username: 'nour', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', lastMessage: 'Good morning!' },
];

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-page">
      <div className="chat-header">
        <FiArrowLeft
          className="back-arrow"
          size={24}
          onClick={() => navigate('/')}
        />
        <h2 className="chat-title">Chats</h2>
      </div>

      <div className="chat-list">
        {conversations.map((conv, index) => (
          <div
            className="chat-item"
            key={index}
            onClick={() => navigate(`/chat/${conv.username}`)}
          >
            <img src={conv.img} alt={conv.username} className="chat-avatar" />
            <div className="chat-info">
              <h4>{conv.username}</h4>
              <p>{conv.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
