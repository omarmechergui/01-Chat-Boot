import React from 'react';
import './Home.css';
import { FiHome, FiMessageCircle, FiUser, FiHeart, FiMessageSquare } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const stories = [
  { username: 'aymen', img: 'https://i.pravatar.cc/60?img=1' },
  { username: 'sarra', img: 'https://i.pravatar.cc/60?img=2' },
  { username: 'nour', img: 'https://i.pravatar.cc/60?img=3' },
  { username: 'mehdi', img: 'https://i.pravatar.cc/60?img=4' },
];

const posts = [
  {
    username: 'aymen',
    userImg: 'https://i.pravatar.cc/60?img=1',
    img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    caption: 'Enjoying the view! 🌄',
    time: '2h ago',
  },
  {
    username: 'sarra',
    userImg: 'https://i.pravatar.cc/60?img=2',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    caption: 'Summer vibes ☀️',
    time: '4h ago',
  },
  {
    username: 'nour',
    userImg: 'https://i.pravatar.cc/60?img=3',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    caption: 'Feeling fresh 💧',
    time: '6h ago',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar">
        <h2 className="logo">InstaClone</h2>
        <div className="icons">
          <FiHome size={24} />
          <FiMessageCircle size={24} onClick={() => navigate('/chat')} />
          <FiUser size={24} />
        </div>
      </nav>

      <div className="stories">
        {stories.map((story, index) => (
          <div className="story" key={index}>
            <img src={story.img} alt={story.username} />
            <span>{story.username}</span>
          </div>
        ))}
      </div>

      <div className="posts">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <div className="post-header">
              <img src={post.userImg} alt={post.username} />
              <span className="username">{post.username}</span>
            </div>
            <img src={post.img} alt="Post" />
            <div className="post-caption">
              <span>{post.caption}</span>
              <div className="time">{post.time}</div>
            </div>
            <div className="post-actions">
              <div className="action">
                <FiHeart />
                <span>Like</span>
              </div>
              <div className="action">
                <FiMessageSquare />
                <span>Comment</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
