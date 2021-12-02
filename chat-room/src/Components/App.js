import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Home from './Home';
import LogIn from './LogIn';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
