import React from "react";
import Heroimg from "../assets/Heroimg.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
          <h1 className="text-4xl  md:text-5xl text-center mb-4 text-blue-600">
            Are You Ready to <span className="text-[#e76f51]">Move</span>
          </h1>
          <p className="text-xl text-white text-center">
            Let's help you explore immigration opportunities
          </p>
          <p className="text-xl text-white text-center">
            all around the world with up to date information on migration routes
            and{" "}
          </p>
          <p className="text-xl text-white text-center">options</p>
        </div>
        <img
          className="w-full max-h-[500px]  object-cover"
          src={Heroimg}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
