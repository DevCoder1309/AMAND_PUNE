import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import News from "./pages/News";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import MembershipForm from "./pages/MembershipForm";
import Success from "./pages/Success";
import EventPage from "./pages/EventPage";
import PublicationPage from "./pages/PublicationPage";
import Donation from "./pages/Donation";
import Confirm from "./pages/Confirm";
import Chatbot from "./pages/Chatbot"; 
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/News" element={<News />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path={`/form/:membershipName`} element={<MembershipForm />} />
        <Route path={`/success`} element={<Success />} />
        <Route path={`/confirm`} element={<Confirm />} />
        <Route path="/Form" element={<MembershipForm />} />
        <Route path="/EventPage" element={<EventPage />} />
        <Route path="/PublicationPage" element={<PublicationPage />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Admin" element={<Login />} />
      </Routes>
      <Chatbot /> 
      <Footer />
    </>
  );
}

export default App;
