import React, { useState } from "react";
import {
  FaThumbsUp,
  FaComment,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";
import "./OpenPosts.css";

const OpenPosts = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(12);
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showShareModal, setShowShareModal] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="open-posts-container">
      <div className="post-card">
        <div className="post-header">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="User"
            className="user-avatar"
          />
          <span className="username">Omar Mechergui</span>
        </div>

        <div className="post-body">
          <div className="post-image-container" onClick={() => setShowModal(true)}>
            <img
              src="https://th.bing.com/th/id/R.751d4b6de5b84faa9cebdc3ce101deec?rik=e%2fB95xNA5amM0A&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2015%2f11%2f22%2ffree-tokyo-ghoul-wallpaper_095906523_290.jpg&ehk=jsdCzL7jMOfsgP2TgWp%2bpwvnHqtBL0SaWOxUEW0R8H8%3d&risl=&pid=ImgRaw&r=0"
              alt="Post"
              className="post-image"
            />
          </div>

          <div className="post-caption-likes">
            <p className="caption">This is a futuristic caption 🚀</p>

            <div className="post-actions">
              <button className={`like-btn ${liked ? "liked" : ""}`} onClick={handleLike}>
                <FaThumbsUp /> {liked ? "Liked" : "Like"} ({likeCount})
              </button>
              <button className="comment-btn">
                <FaComment /> Comment ({comments.length})
              </button>
              <button className="share-btn" onClick={() => setShowShareModal(true)}>
                <FaShareAlt /> Share
              </button>
            </div>

            {/* Comment Form */}
            <form className="comment-form" onSubmit={handleAddComment}>
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit">Post</button>
            </form>

            {/* Comments Section */}
            <div className="comments-section">
              {comments.map((comment, index) => (
                <p key={index} className="comment">{comment}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-image-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="close-btn" onClick={() => setShowModal(false)} />
            <img
              src="https://via.placeholder.com/600x400"
              alt="Zoomed Post"
              className="zoomed-image"
            />
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="modal-overlay" onClick={() => setShowShareModal(false)}>
          <div className="share-modal" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="close-btn" onClick={() => setShowShareModal(false)} />
            <h3>Share this post</h3>
            <input type="text" value="https://yourapp.com/post/123" readOnly />
            <button onClick={() => navigator.clipboard.writeText("https://yourapp.com/post/123")}>
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenPosts;
