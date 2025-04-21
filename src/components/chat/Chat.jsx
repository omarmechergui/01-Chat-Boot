import React, { useState } from 'react';
import './Chat.css';
import ChatRoom from '../chatroom/ChatRoom';

const initialUsers = [
  { id: 1, name: 'John Smith', unread: 3, online: true, lastMessage: '' },
  { id: 2, name: 'Jane Doe', unread: 1, online: false, lastMessage: '' },
  { id: 3, name: 'Bob Johnson', unread: 0, online: true, lastMessage: '' },
  { id: 4, name: 'Emily Kim', unread: 5, online: true, lastMessage: '' },
];

const Chat = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [messages, setMessages] = useState({}); // { userId: [msg, msg, ...] }

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setUsers((prev) =>
      prev.map((u) =>
        u.id === user.id ? { ...u, unread: 0 } : u
      )
    );
  };

  const handleSendMessage = (text) => {
    const userId = selectedUser.id;
    const newMessage = {
      id: Date.now(),
      text,
      sender: 'Me',
    };

    setMessages((prev) => {
      const updatedMsgs = [...(prev[userId] || []), newMessage];

      // update last message in sidebar
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === userId ? { ...u, lastMessage: text } : u
        )
      );

      return { ...prev, [userId]: updatedMsgs };
    });
  };

  const handleReplyMessage = (msg) => {
    setMessages((prev) => {
      const updated = [...(prev[selectedUser.id] || []), msg];
      return { ...prev, [selectedUser.id]: updated };
    });

    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === selectedUser.id ? { ...u, lastMessage: msg.text, unread: u.unread + 1 } : u
      )
    );
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-container">
      <div className="sidebar">
        <div className="sidebar-header">Chats</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="user-list">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className={user.id === selectedUser.id ? 'active' : ''}
              onClick={() => handleUserClick(user)}
            >
              <div className="avatar">
                {user.name.charAt(0)}
                {user.online && <div className="status-dot"></div>}
              </div>

              <div className="user-info">
                <div className="username">{user.name}</div>
                <div className="last-message">
                  {user.lastMessage || 'No messages'}
                </div>
              </div>

              {user.unread > 0 && (
                <span className="badge">{user.unread}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="chatroom-placeholder">
        <ChatRoom
          user={selectedUser}
          messages={messages[selectedUser.id] || []}
          onSend={handleSendMessage}
          onReplyFromOther={handleReplyMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
