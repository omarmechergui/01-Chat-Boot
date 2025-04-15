import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import './App.css';
import Login from './components/login/Login'; // Your Login component
import Signup from './components/signup/Signup';
import Home from './components/home/Home';

function App() {
  return (
    <Router> {/* Wrap the app with Router */}
      <Routes> {/* Define routes here */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} /> {/* Home page route */}

      </Routes>
    </Router>
  );
}

export default App;
