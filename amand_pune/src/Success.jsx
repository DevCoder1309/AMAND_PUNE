import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Success() {
  const [message, setMessage] = useState("");
  const location = useLocation(); 

  useEffect(() => {
    const verifyPayment = async () => {
      const query = new URLSearchParams(location.search);
      const sessionId = query.get("session_id");

      try {
        const response = await axios.get(`http://localhost:3000/success?session_id=${sessionId}`);
        setMessage(response.data);
      } catch (error) {
        console.error("Error verifying payment:", error);
        setMessage("Error verifying payment.");
      }
    };

    verifyPayment();
  }, [location]);

  return (
    <div>
      <h1>{message || "Verifying payment..."}</h1>
      <a href="/">Click here to go back to home page</a>
    </div>
  );
}
