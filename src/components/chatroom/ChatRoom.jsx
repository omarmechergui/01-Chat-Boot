import React, { useState, useRef, useEffect } from 'react';
import './ChatRoom.css';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';
import Picker from 'emoji-picker-react';
import sendSound from '../../assets/sounds/send.mp3';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [activeUser, setActiveUser] = useState('Me');
  const [modal, setModal] = useState({ show: false, messageId: null });
  const [replyTo, setReplyTo] = useState(null);
  const [editMessageId, setEditMessageId] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const messagesEndRef = useRef(null);
  const audioRef = useRef(new Audio(sendSound));

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const playSendSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

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
          avatar: activeUser === 'Me'
            ? '/assets/images/my-avatar.png'
            : '/assets/images/other-avatar.png',
          replyTo: replyTo ? replyTo.text : null,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      playSendSound();
    }
    setInput('');
    setReplyTo(null);
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          audio: url,
          sender: activeUser,
          avatar: activeUser === 'Me'
            ? '/assets/images/my-avatar.png'
            : '/assets/images/other-avatar.png',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    };
    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  const openModal = id => setModal({ show: true, messageId: id });
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
    if (msg) setReplyTo(msg);
    closeModal();
  };

  const onEmojiClick = (_, emojiObj) => {
    setInput(prev => prev + emojiObj.emoji);
    setShowEmoji(false);
  };

  return (
    <div className="chatroom">
      <div className="chatroom-header">🧠 01-Chat-Boot</div>
      <div className="messages">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`message ${msg.sender === 'Me' ? 'sent' : 'received'}`}
            onContextMenu={e => {
              e.preventDefault();
              openModal(msg.id);
            }}
          >
            <img src={msg.avatar} alt="avatar" className="avatar" />
            <div className="bubble">
              {msg.replyTo && <div className="reply-block">↩️ {msg.replyTo}</div>}
              {msg.text && <div>{msg.text}</div>}
              {msg.audio && (
                <audio controls style={{ marginTop: '5px' }}>
                  <source src={msg.audio} type="audio/webm" />
                </audio>
              )}
              <div className="meta">{msg.time}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {modal.show && (
        <div className="modal-backdrop">
          <div className="modal-box glass">
            <button onClick={replyMessage}>↩️ Reply</button>
            <button onClick={editMessage}>✏️ Edit</button>
            <button onClick={deleteMessage}>🗑️ Delete</button>
            <button onClick={closeModal}>❌ Cancel</button>
          </div>
        </div>
      )}

      <div className="chatroom-footer">
        <button onClick={() => setShowEmoji(!showEmoji)}><BsEmojiSmile /></button>
        {showEmoji && <Picker onEmojiClick={onEmojiClick} />}
        <input
          type="text"
          value={input}
          placeholder={replyTo ? `↪️ ${replyTo.text}` : 'Type a message...'}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        {input ? (
          <button onClick={sendMessage}><FaPaperPlane /></button>
        ) : (
          <button 
            onMouseDown={startRecording} 
            onMouseUp={stopRecording} 
            onTouchStart={startRecording} 
            onTouchEnd={stopRecording}
          >
            <FaMicrophone />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
