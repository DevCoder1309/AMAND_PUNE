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
import Success from "./Success";
import EventPage from "./pages/EventPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path={`/form/:membershipName`} element={<MembershipForm />} />
        <Route path={`/success`} element={<Success />} />
        <Route path="/form" element={<MembershipForm />} />
        <Route path="/eventPage" element={<EventPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
