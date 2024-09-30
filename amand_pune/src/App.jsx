import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donate from "./Donate";
import MembershipForm from "./MembershipForm";
import Home from "./Home";
import Success from "./Success";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/:membershipName" element={<MembershipForm />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
