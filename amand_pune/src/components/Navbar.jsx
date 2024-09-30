import Logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="bg-primary flex flex-col w-full  px-[1rem] p-2 gap-4 md:flex-row md:justify-around md:items-center">
      <div className="flex">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-10" />
        </Link>
      </div>
      <div onClick={handleMenu} className="md:hidden">
        <IoMdMenu className="absolute right-8 top-4 cursor-pointer" />
      </div>
      <div
        className={`${
          openMenu ? "flex" : "hidden"
        } flex-col md:flex-row md:justify-center md:items-center`}
      >
        <ul className="text-[0.75rem] px-1 flex gap-[1rem] flex-col md:flex-row">
          <li className="font-semibold cursor-pointer">
            <Link to="/events">EVENTS</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to="/publications">PUBLICATIONS</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to="/news">IN THE NEWS</Link>
          </li>
          <li className="font-semibold cursor-pointer">
            <Link to="/membership">MEMBERSHIP</Link>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer flex justify-center items-center bg-secondary h-[2rem] rounded w-[6rem]">
        <Link to="/contact">
          <button className="text-[0.75rem] font-semibold cursor-pointer text-center">
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
