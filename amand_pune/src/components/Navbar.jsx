import Logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      handleMenu();
    }
  };

  return (
    <div className="bg-primary flex flex-col w-full px-[1rem] py-[1rem] gap-2 md:px-[4rem] md:flex-row md:justify-between md:items-center">
      <div className="flex">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-8 sm:w-10" />
        </Link>
      </div>

      <div onClick={handleMenu} className="md:hidden">
        <IoMdMenu className="text-[22px] absolute right-8 top-4 cursor-pointer" />
      </div>

      <div
        className={`${
          openMenu ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:justify-center md:items-center`}
      >
        <ul className="text-[14px] px-1 flex gap-[1rem] flex-col md:flex-row">
          <li
            onClick={handleLinkClick}
            className="font-mont font-semibold cursor-pointer hover-font-color"
          >
            <Link to="/Events">EVENTS</Link>
          </li>
          <li
            onClick={handleLinkClick}
            className="font-mont font-semibold cursor-pointer hover-font-color"
          >
            <Link to="/Publications">PUBLICATIONS</Link>
          </li>
          <li
            onClick={handleLinkClick}
            className="font-mont font-semibold cursor-pointer hover-font-color"
          >
            <Link to="/News">IN THE NEWS</Link>
          </li>
          <li
            onClick={handleLinkClick}
            className="font-mont font-semibold cursor-pointer hover-font-color"
          >
            <Link to="/Membership">MEMBERSHIP</Link>
          </li>
          <li
            onClick={handleLinkClick}
            className="font-mont font-semibold cursor-pointer hover-font-color"
          >
            <Link to="/Donation">DONATION</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-2 xs:max-md:absolute xs:max-md:top-4 xs:max-md:right-20">
        <Link to="/Contact">
          <div className="cursor-pointer hover:bg-white hover:bg-secondary flex justify-center items-center bg-secondary rounded p-1 w-[5rem[ md:p-2 md:w-[7rem]">
            <button className="text-[10px] md:text-[12px]  font-mont font-semibold cursor-pointer hover-font-color text-center">
              CONTACT US
            </button>
          </div>
        </Link>
        <Link to="/Membership">
          <div className="cursor-pointer text-white hover:bg-white hover:bg-secondary flex justify-center items-center bg-darkGreen rounded p-1 w-[5rem[ md:p-2 md:w-[7rem]">
            <button className="text-[10px] md:text-[12px] font-mont font-semibold cursor-pointer hover-font-color  text-center">
              JOIN US
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
