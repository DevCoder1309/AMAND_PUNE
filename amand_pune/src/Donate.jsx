import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css'; // Assume your custom CSS is in this file

function Donate() {
  const navigate = useNavigate();

  const handleMembershipClick = (membershipName) => {
    navigate(`/donate/${membershipName}`);
  };

  return (
    <div className="donate-container">
      <h1>Choose a Membership Plan</h1>
      <div className="membership-cards">
        <div className="card">
          <h2>Lifetime Membership</h2>
          <p>One-time fee of Rs 1000 and Rs 100 per month subscription.</p>
          <button onClick={() => handleMembershipClick('lifetime')}>Become a Member</button>
        </div>
        <div className="card">
          <h2>Regular Membership</h2>
          <p>Yearly fee of Rs 200 and Rs 50 admission fee, Rs 100 per month subscription.</p>
          <button onClick={() => handleMembershipClick('regular')}>Become a Member</button>
        </div>
        <div className="card">
          <h2>Honorary Membership</h2>
          <p>For distinguished service. No fees, participation in general body meetings.</p>
          <button onClick={() => handleMembershipClick('honorary')}>Become a Member</button>
        </div>
      </div>
    </div>
  );
}

export default Donate;
