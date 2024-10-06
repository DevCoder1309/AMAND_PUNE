import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Success() {
  const [searchParams] = useSearchParams();
  const session_id = searchParams.get("session_id");

  useEffect(() => {
    if (session_id) {
      axios.get(`http://localhost:3000/success?session_id=${session_id}`)
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error("Error validating session", error);
        });
    }
  }, [session_id]);

  return <div>Payment Successful! Thank you for your membership.</div>;
}

export default Success;
