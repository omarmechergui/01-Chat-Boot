import React, { useState } from "react";
import "./EditProfile.css";

const EditProfile = () => {
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/150?img=5");

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageURL(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-profile-wrapper">
      <div className="edit-profile-card">
        <div className="profile-image-container">
          <img
            className="profile-image"
            src={imageURL}
            alt="Profile"
            onClick={() => document.getElementById("image-upload").click()} // Trigger file input on image click
          />
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <h2 className="edit-title">Edit Profile</h2>
        <form className="edit-form">
          <div className="edit-input-group">
            <label>Username</label>
            <input type="text" placeholder="@omarmechergui" />
          </div>
          <div className="edit-input-group">
            <label>Email</label>
            <input type="email" placeholder="omar@example.com" />
          </div>
          <div className="edit-input-group">
            <label>Bio</label>
            <textarea rows="3" placeholder="Full-Stack MERN Developer 🔥" />
          </div>
          <button className="save-btn" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
