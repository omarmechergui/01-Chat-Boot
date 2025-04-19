import React, { useState } from 'react';
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [activeUser, setActiveUser] = useState('Me');
  const [modal, setModal] = useState({ show: false, messageId: null });
  const [replyTo, setReplyTo] = useState(null);
  const [editMessageId, setEditMessageId] = useState(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    if (editMessageId) {
      setMessages(prev =>
        prev.map(msg => msg.id === editMessageId ? { ...msg, text: input } : msg)
      );
      setEditMessageId(null);
    } else {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          text: input,
          sender: activeUser,
          replyTo: replyTo ? replyTo.text : null,
        }
      ]);
    }
    setInput('');
    setReplyTo(null);
  };

  const openModal = (id) => {
    setModal({ show: true, messageId: id });
  };

  const closeModal = () => {
    setModal({ show: false, messageId: null });
    setReplyTo(null);
    setEditMessageId(null);
  };

  const deleteMessage = () => {
    setMessages(prev => prev.filter(msg => msg.id !== modal.messageId));
    closeModal();
  };

  const editMessage = () => {
    const msg = messages.find(m => m.id === modal.messageId);
    if (msg) {
      setInput(msg.text);
      setEditMessageId(msg.id);
    }
    closeModal();
  };

  const replyMessage = () => {
    const msg = messages.find(m => m.id === modal.messageId);
    if (msg) {
      setReplyTo(msg);
    }
    closeModal();
  };

  return (
    <div className="chatroom">
      <div className="chatroom-header">
        Group Chat
      </div>
      <div className="messages">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`message ${msg.sender === 'Me' ? 'sent' : 'received'}`}
            onContextMenu={(e) => {
              e.preventDefault();
              openModal(msg.id);
            }}
          >
            {msg.replyTo && (
              <div className="reply-block">
                <strong>Reply:</strong> {msg.replyTo}
              </div>
            )}
            <div>{msg.text}</div>
            <div className="meta">{msg.sender}</div>
          </div>
        ))}
      </div>

      {modal.show && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button onClick={replyMessage}>↩️ Reply</button>
            <button onClick={editMessage}>✏️ Edit</button>
            <button onClick={deleteMessage}>🗑️ Delete</button>
            <button onClick={closeModal}>❌ Cancel</button>
          </div>
        </div>
      )}

      <div className="chatroom-footer">
        <input
          type="text"
          value={input}
          placeholder={replyTo ? `Replying to: ${replyTo.text}` : 'Type a message...'}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
