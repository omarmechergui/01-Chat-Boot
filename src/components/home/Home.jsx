import React from 'react';
import './Home.css';
import { FiHome, FiMessageCircle, FiUser } from 'react-icons/fi';

const stories = [
  { username: 'aymen', img: 'https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg' },
  { username: 'sarra', img: 'https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg' },
  { username: 'nour', img: 'https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg' },
  { username: 'mehdi', img: 'https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg' },
];

const posts = [
  { username: 'aymen', img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d' },
  { username: 'sarra', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' },
  { username: 'nour', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
];

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2 className="logo">InstaClone</h2>
        <div className="icons">
          <FiHome size={24} />
          <FiMessageCircle size={24} />
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
            <div className="post-header">{post.username}</div>
            <img src={post.img} alt="Post" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
