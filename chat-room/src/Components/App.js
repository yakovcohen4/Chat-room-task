import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import LogIn from './LogIn';
import Chat from './Chat';
import Register from './Register';

function App() {
  const [state, setstate] = useState();
  return (
    <div>
      <Router>
        <Routes>
          <Route exect key="login" path="/" element={<LogIn />} />
          <Route exect key="chat" path="/chat" element={<Chat />} />
          <Route exect key="register" path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
