import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Donate from './Donate';
import MembershipForm from './MembershipForm'; 
import Home from './Home';
import Success from './Success'
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/:membershipName" element={<MembershipForm />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
