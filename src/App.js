import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import './App.css';
import Login from './components/login/Login'; // Your Login component
import Signup from './components/signup/Signup';
import Home from './components/home/Home';
import Chat from './components/chat/Chat';
import ChatRoom from './components/chatroom/ChatRoom';
import Profile from './components/profile/Profile';
import EditProfile from './components/editprofile/EditProfile';
import OpenPosts from './components/openposts/OpenPosts';

function App() {
  return (
    <Router> {/* Wrap the app with Router */}
      <Routes> {/* Define routes here */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/chat" element={<Chat />} /> {/* Chat page route */}
        <Route path='/profile' element={<Profile />} /> {/* Profile page route */}
        <Route path='edit' element={<EditProfile />} /> {/* Edit profile page route */}
        <Route path='/openposts' element={<OpenPosts />} /> {/* Open posts page route */}


      </Routes>
    </Router>
  );
}

export default App;
