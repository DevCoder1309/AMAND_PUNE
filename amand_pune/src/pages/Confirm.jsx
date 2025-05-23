import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SuccessIcon from "../assets/check.svg";

function Success() {
  const [searchParams] = useSearchParams();
  const session_id = searchParams.get("session_id");

  useEffect(() => {
    if (session_id) {
      axios
        .get(`/api/confirm?session_id=${session_id}`)
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((error) => {
          console.error("Error validating session", error);
        });
    }
  }, [session_id]);

  return (
    <div className="bg-bgColor min-h-screen flex flex-col gap-[2rem] pt-[4rem] md:justify-center items-center py-[2rem] px-[4rem]">
      <img className="w-[10rem]" src={SuccessIcon}></img>
      <div className="text-[16px] font-mont text-center">
        Thank you for your contribution.
      </div>
      <div className="text-[14px] font-mont text-center">
        We have sent you the confirmation email for your donation
      </div>
    </div>
  );
}

export default Success;
