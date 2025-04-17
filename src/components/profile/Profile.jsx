import React from "react";
import "./Profile.css";

const userImages = [
  "https://picsum.photos/seed/omar1/300/300",
  "https://picsum.photos/seed/omar2/300/300",
  "https://picsum.photos/seed/omar3/300/300",
  "https://picsum.photos/seed/omar4/300/300",
  "https://picsum.photos/seed/omar5/300/300",
  "https://picsum.photos/seed/omar6/300/300",
];

const Profile = () => {
  return (
    <div className="neo-profile-wrapper">
      <div className="neo-profile-card">
        <div className="avatar-glow">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="User"
            className="neo-avatar"
          />
        </div>
        <h2 className="neo-username">@omarmechergui</h2>
        <p className="neo-role">Full-Stack Developer | MERN 🔥</p>

        <div className="neo-follow-stats">
          <div className="neo-follow-box">
            <h4>350</h4>
            <span>Posts</span>
          </div>
          <div className="neo-follow-box">
            <h4>1.2k</h4>
            <span>Followers</span>
          </div>
          <div className="neo-follow-box">
            <h4>180</h4>
            <span>Following</span>
          </div>
        </div>

        <div className="neo-btn-group">
          <button className="neo-edit-btn">Edit Profile</button>
          <button className="neo-msg-btn">Message</button>
        </div>
      </div>

      <h3 className="gallery-title">Photos</h3>
      <div className="neo-gallery">
        {userImages.map((src, index) => (
          <div key={index} className="gallery-img-wrapper">
            <img src={src} alt={`User post ${index}`} className="gallery-img" />
            <div className="img-overlay">❤️ 120</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
