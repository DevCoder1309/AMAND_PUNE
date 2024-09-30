import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-primary flex w-full h-[3.5rem] justify-around sticky top-0 z-[20] mx-auto ">
      <div>
        <a className="">
          <img src={Logo} alt="logo"></img>
        </a>
      </div>
      <div className="flex justify-center items-center sm:max-md:hidden">
        <ul className="text-[0.68rem] px-1 flex gap-[1.5rem]">
          <li className="font-semibold cursor-pointer">
            <a>EVENTS</a>
          </li>
          <li className="font-semibold cursor-pointer">
            <a>PUBLICATIONS</a>
          </li>
          <li className="font-semibold cursor-pointer">
            <a>IN THE NEWS</a>
          </li>
          <li className="font-semibold cursor-pointer">
            <a>MEMBERSHIP</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center bg-secondary p-2 h-[2rem] m-[0.63rem] rounded">
        <button className="text-[0.75rem] font-semibold cursor-pointer">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Navbar;
