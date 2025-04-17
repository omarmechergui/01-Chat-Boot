import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom'; // استيراد Link من React Router

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // إذا كان كل شيء صحيح، يمكن استخدام uuid لتوليد الـ userID مثلاً
    const userId = generateUserId(); // استبدل هذا بكود إنشاء ID حقيقي
    console.log('User ID:', userId);
    // تنفيذ التسجيل هنا
  };

  const generateUserId = () => {
    return 'user-' + Math.random().toString(36).substr(2, 9); // توليد معرف عشوائي
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Sign Up</button>
        </form>
        <Link to="/login" className="signup-link">Already have an account? Login here</Link>
      </div>
    </div>
  );
};

export default Signup;
