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
        <Route path="/Form" element={<MembershipForm />} />
        <Route path="/EventPage" element={<EventPage />} />
        <Route path="/PublicationPage" element={<PublicationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
