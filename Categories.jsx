import React, { useState } from "react";
import { data } from "../data/data.js";
import {
  AiOutlineSearch,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { GiAfrica } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Categories = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="max-w-[1240px] mx-auto mt-10 p-6 items-center text-center">
      <p className="text-4xl text-blue-600">Country Selector</p>
      <p className="text-lg mt-4">
        Let's get started. Select a country of your choosing, explore migration
        routes, gather and
      </p>
      <p className="text-lg  ">
        compare information and make an informed decision
      </p>
      <div className="relative bg-gray-200 mt-4 mx-auto rounded-full flex items-center px-2 md:w-[50%]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Country"
        />
        <button
          type="submit"
          class="text-white hidden md:inline absolute right-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-2xl text-sm p-2.5 px-4  "
        >
          Search
        </button>
      </div>
      <div className="max-w-[1640px] grid grid-rows-2 md:grid-cols-3 gap-6  items-center mx-auto py-6">
        {data
          .filter((item, index) => {
            return search.toLowerCase() === item
              ? ""
              : item.name.toLowerCase().includes(search);
          })
          .map((item, index) => (
            <div
              key={index}
              className=" relative max-w-[500px] flex justify-center items-center rounded-3xl hover:scale-105 cursor-pointer"
            >
              <h2 className="text-4xl  font-semibold md:text-2xl rounded-3xl absolute flex justify-center  items-center mx-auto bg-black/40  text-white w-[55vh] h-0 md:h-full">
                {item.name}
              </h2>
              <p className="text-xl font-semibold md:text-sm p-4 absolute rounded-3xl flex justify-start mx-auto text-white md:w-[55vh] h-full">
                Migration Est time
                <br />
                {item.time}
              </p>
              <p className="text-xl font-semibold md:text-sm rounded-3xl p-4 absolute hidden md:flex justify-end mx-auto  text-white md:w-[55vh] h-full">
                Migration Cost Est
                <br />
                {item.cost}
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-[55vh] rounded-3xl object-cover"
              />
            </div>
          ))}
      </div>
      <div className="flex md:flex-row flex-col items-center text-blue-600 md:p-4 mt-8">
        <GiAfrica className="text-black" size={45} />
        <div className="flex flex-row md:flex-col">
          <h1 className="md:text-left text-xl font-bold hidden md:inline  md:ml-2">
            Africa No1
          </h1>
          <p className="md:ml-2 md:text-left text-2xl md:text-sm font-semibold">
            Travel.com is Africa leading travel agency
          </p>
        </div>
        <RiCustomerService2Line className="text-black md:ml-40" size={50} />
        <div className="flex flex-row md:flex-col">
          <h1 className="md:text-left hidden md:inline md:text-lg font-bold  md:ml-2">
            We are here for you
          </h1>
          <p className="md:ml-2 md:text-left text-xl md:text-sm font-semibold">
            Reach us 24/7
          </p>
          <p className="md:text-left md:ml-2 text-}font-semibold">
            (Monday - Sunday)
          </p>
        </div>
        <FaRegMoneyBillAlt className="text-black md:ml-auto" size={45} />
        <div className="flex flex-row md:flex-col">
          <h1 className="md:text-left hidden md:inline md:text-lg font-bold  md:ml-2">
            Pay Small Small
          </h1>
          <p className="md:ml-2 hidden md:inline-table text-lg md:text-sm font-semibold">
            Lock down great travel deals and
          </p>
          <p className="md:text-sm text-2xl md:text-left md:ml-2 font-semibold">
            Pay in convenient installments
          </p>
        </div>
      </div>

      <div className="mt-16 border-t">
        <h2 className="text-3xl md:text-4xl  font-bold mb-4 ">
          <span className="text-4xl text-red-500 md:text-6xl">50%</span>{" "}
          <span className="animate-pulse italic">Discount</span> Available
        </h2>
        <form className="text-left">
          <div>
            <h4 className="mb-2 text-lg font-semibold ml-2">Name</h4>
            <input
              type="text"
              className="bg-gray-100 shadow-sm  rounded-2xl mb-6 border w-full md:w-[50%] outline-none p-2"
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <h4 className="text-lg ml-2 font-semibold">Email</h4>
            <input
              type="email"
              className="bg-gray-100 shadow-sm rounded-2xl mb-6 border w-full md:w-[50%] outline-none p-2"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <h4 className="text-lg ml-2 font-semibold">Password</h4>
            <input
              type="password"
              className="bg-gray-100 shadow-sm rounded-2xl mb-6 border w-full md:w-[50%] outline-none p-2"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div>
            <h4 className="text-lg ml-2 font-semibold">Repeat Password</h4>
            <input
              type="password"
              className="bg-gray-100 shadow-sm rounded-2xl mb-6 border w-full md:w-[50%] outline-none p-2"
              placeholder="Enter your Password again"
              required
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-lg ml-2">
              I agree with the{" "}
              <a
                href="/"
                className="text-blue-800  underline underline-offset-1 font-semibold"
              >
                terms and conditions
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 mt-4 hover:bg-blue-500 rounded-full"
          >
            Register New User
          </button>
        </form>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mt-8">Follow us!</h3>
        <p className="text-lg italic">
          Stay tuned and access the latest deals and
        </p>
        <p className="text-lg italic">discounts with</p>
        <div className="flex items-center space-x-4 justify-center">
          <AiOutlineFacebook size={35} />
          <AiOutlineInstagram size={35} />
          <AiOutlineTwitter size={35} />
          <AiOutlineYoutube size={35} />
          <AiOutlineLinkedin size={35} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
