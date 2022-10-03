import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-6 text-white mt-6 flex justify-between items-center font-bold">
      <div>
        <h1 className="text-2xl cursor-pointer">Travel.com</h1>
      </div>
      <div className="flex flex-row">
        <ul>
          <li className=" hover:text-amber-600">About us</li>
          <li className=" hover:text-amber-600">Ts & Cs</li>
          <li className=" hover:text-amber-600">Privacy Policy</li>
          <li className=" hover:text-amber-600">Contact Us</li>
          <li className=" hover:text-amber-600">Refer a Customer</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
