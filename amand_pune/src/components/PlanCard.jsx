import { Link } from "react-router-dom";
const PlanCard = ({ name, price, planDesc, special}) => {
  return (

    <Link to={`/form/${name}`}>
      <div className="flex flex-col bg-white w-full gap-10 text-center rounded-md border-primary border-gray-200 border-2 hover-bg-color cursor-pointer">
        <div className="text-[18px] md:text-[22px] uppercase text-left p-3 font-medium font-mont">
          {name}
        </div>
        <div className="text-[20px] md:text-[24px] font-semibold px-5">
          {price}
        </div>
        <div className=" text-left text-[12px] md:text-[16px] p-4 font-charter">
          {planDesc}
        </div>


        <div
          className={`${
            special ? "bg-secondary" : "bg-primary"
          } w-full p-2 font-mont uppercase`}
        >
          Join
        </div>
      </div>
    </Link>
  );
};

export default PlanCard;
