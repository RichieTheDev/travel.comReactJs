import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex md:sticky md:top-0 md:z-50  justify-between items-center h-24 cursor-pointer max-w-[1240px] mx-auto px-4 ">
        <h1 className="w-full text-3xl font-bold ">Travel.com</h1>

        <ul className="hidden md:flex">
          <li className="p-4 hover:text-amber-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:text-amber-600">
            <Link to="/About">About</Link>
          </li>
          <li className="p-4 hover:text-amber-600">
            <Link to="/Faqs">Faqs</Link>
          </li>
          <li className="p-4 hover:text-amber-600">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          <AiOutlineMenu size={25} />
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] z-10 h-full text-black bg-white items-center text-center ease-in-out duration-300"
              : "ease-in-out duration-300 fixed left-[-100%]"
          }
        >
          <AiOutlineClose
            onClick={handleNav}
            className="absolute top-10 right-4"
            size={25}
          />
          <li className="hover:text-amber-600 text-lg p-4 mt-16">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-amber-600 text-lg p-4 ">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:text-amber-600 text-lg p-4 ">
            <Link to="/Faqs">Faqs</Link>
          </li>
          <li className="hover:text-amber-600 text-lg p-4">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
