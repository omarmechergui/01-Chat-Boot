import React, { useState } from 'react';
import './Chat.css';
import { FiSearch, FiUser, FiMoreHorizontal } from 'react-icons/fi';
import ChatRoom from '../chatroom/ChatRoom';

const users = [
  { username: 'aymen', userImg: 'https://i.pravatar.cc/60?img=1' },
  { username: 'sarra', userImg: 'https://i.pravatar.cc/60?img=2' },
  { username: 'nour', userImg: 'https://i.pravatar.cc/60?img=3' },
  { username: 'mehdi', userImg: 'https://i.pravatar.cc/60?img=4' },
];

const Chat = () => {
  const [activeUser, setActiveUser] = useState(users[0]);  // Default active user is the first user
  
  const handleUserChange = (user) => {
    setActiveUser(user);  // Change active user
  };

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <div className="sidebar-header">
          <FiUser size={24} />
          <span className="sidebar-title">Chat</span>
        </div>
        <div className="sidebar-users">
          {users.map((user, index) => (
            <div
              key={index}
              className={`user-item ${activeUser.username === user.username ? 'active' : ''}`}
              onClick={() => handleUserChange(user)}
            >
              <img src={user.userImg} alt={user.username} />
              <span>{user.username}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chatroom">
        <div className="chatroom-header">
          <div className="chatroom-header-left">
            <FiSearch size={20} />
            <input type="text" placeholder="Search messages..." />
          </div>
          <div className="chatroom-header-right">
            <FiMoreHorizontal size={20} />
          </div>
        </div>
        <div className="chatroom-placeholder">
          <ChatRoom activeUser={activeUser} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
