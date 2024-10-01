<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Donate from './Donate';
import MembershipForm from './MembershipForm'; 
import Home from './Home';
import Success from './Success'
import Login from './Login';
=======
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import News from "./pages/News";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
>>>>>>> 4c4cfb68247f7f921a5bb65aafaab8ebfb7a0922

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/:membershipName" element={<MembershipForm />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/Login" element={<Login/>} />
=======
        <Route path="/events" element={<Events />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
>>>>>>> 4c4cfb68247f7f921a5bb65aafaab8ebfb7a0922
      </Routes>
      <Footer />
    </>
  );
}

export default App;
