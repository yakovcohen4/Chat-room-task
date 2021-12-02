import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import LogIn from './LogIn';
import Chat from './Chat';

function App() {
  const [state, setstate] = useState();
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
