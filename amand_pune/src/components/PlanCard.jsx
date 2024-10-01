import { Link } from "react-router-dom";
const PlanCard = ({ name, price, planDesc, special }) => {
  return (
    <div className="flex flex-col bg-white w-full gap-10 text-center  xs:w-[15rem] rounded-md">
      <div className="text-2xl uppercase text-left p-3 font-semibold">
        {name}
      </div>
      <div className="text-3xl font-semibold px-5">{price}</div>
      <div className=" text-left text-[12px] p-5">{planDesc}</div>
      <Link to="/form">
        <div
          className={`${special ? "bg-primary" : "bg-[#989595]"} w-full p-2`}
        >
          Join
        </div>
      </Link>
    </div>
  );
};

export default PlanCard;
