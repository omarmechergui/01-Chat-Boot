import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiMessageCircle, FiUser, FiMessageSquare, FiHeart, FiMenu } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const stories = [
    { username: 'Lina', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { username: 'Adam', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { username: 'Nour', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { username: 'Youssef', img: 'https://randomuser.me/api/portraits/men/77.jpg' },
    { username: 'Salma', img: 'https://randomuser.me/api/portraits/women/12.jpg' }
  ];

  const posts = [
    {
      userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
      username: 'Adam',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      caption: 'Relaxing hike in the mountains 🏔️',
      time: '2 hours ago'
    },
    {
      userImg: 'https://randomuser.me/api/portraits/women/68.jpg',
      username: 'Nour',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      caption: 'The beach always heals 🌊💙',
      time: '1 day ago'
    },
    {
      userImg: 'https://randomuser.me/api/portraits/women/44.jpg',
      username: 'Lina',
      img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      caption: 'Lost in a sunflower field 🌻',
      time: '3 days ago'
    }
  ];

  return (
    <div className="home-container">
      {/* Top Navbar */}
      <nav className="home-navbar">
        {/* <div className="home-sidebar-toggle" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </div> */}
        <h2 className="home-logo">InstaClone</h2>
        {/* <div className="home-icons">
          <FiHome size={24} />
          <FiMessageCircle size={24} onClick={() => navigate('/chat')} />
          <FiUser size={24} />
        </div> */}
        <div className="home-sidebar-toggle" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`home-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="home-sidebar-items">
          <div className="home-sidebar-item" onClick={() => navigate('/home')}>
            <FiHome size={20} />
            {isSidebarOpen && <span>Home</span>}
          </div>
          <div className="home-sidebar-item" onClick={() => navigate('/chat')}>
            <FiMessageCircle size={20} />
            {isSidebarOpen && <span>Messages</span>}
          </div>
          <div className="home-sidebar-item" onClick={() => navigate('/profile')}>
            <FiUser size={20} />
            {isSidebarOpen && <span>Profile</span>}
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="home-stories">
        {stories.map((story, index) => (
          <div className="home-story" key={index}>
            <img src={story.img} alt={story.username} />
            <span>{story.username}</span>
          </div>
        ))}
      </div>

      {/* Posts */}
      <div className="home-posts">
        {posts.map((post, index) => (
          <div className="home-post" key={index}>
            <div className="home-post-header">
              <img src={post.userImg} alt={post.username} />
              <span className="home-username">{post.username}</span>
            </div>
            <img src={post.img} alt="Post" />
            <div className="home-post-caption">
              <span>{post.caption}</span>
              <div className="home-time">{post.time}</div>
            </div>
            <div className="home-post-actions">
              <div className="home-action">
                <FiHeart />
                <span>Like</span>
              </div>
              <div className="home-action">
                <FiMessageSquare />
                <span>Comment</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar for Mobile */}
      <div className="home-bottom-bar">
        <FiHome size={24} onClick={() => navigate('/home')} />
        <FiMessageCircle size={24} onClick={() => navigate('/chat')} />
        <FiUser size={24} onClick={() => navigate('/profile')} />
      </div>
    </div>
  );
};

export default Home;
