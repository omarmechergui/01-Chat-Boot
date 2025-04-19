// Chat.jsx
import React, { useState } from 'react';
import './Chat.css';
import ChatRoom from '../chatroom/ChatRoom';

const users = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Bob Johnson' },
  { id: 4, name: 'Emily Kim' },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="chat-container">
      <div className="sidebar">
        <div className="sidebar-header">Chats</div>
        <ul className="user-list">
          {users.map((user) => (
            <li
              key={user.id}
              className={user.id === selectedUser.id ? 'active' : ''}
              onClick={() => setSelectedUser(user)}
            >
              <div className="avatar">{user.name.charAt(0)}</div>
              <div className="user-info">
                <div className="username">{user.name}</div>
                <div className="last-message">Last message...</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="chatroom-placeholder">
        <ChatRoom user={selectedUser} />
      </div>
    </div>
  );
};

export default Chat;
