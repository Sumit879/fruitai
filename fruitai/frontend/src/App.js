import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
