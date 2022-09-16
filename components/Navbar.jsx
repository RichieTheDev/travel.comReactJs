import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav);
};

return (
    <>
    <div className='flex justify-between items-center h-24 cursor-pointer max-w-[1240px] mx-auto px-4 '>
        <h1 className='w-full text-3xl font-bold '>Travel.com</h1>
    <ul className='hidden md:flex'>
        <li className='p-4 hover:text-amber-600'>Home</li>
        <li className='p-4 hover:text-amber-600'>About</li>
        <li className='p-4 hover:text-amber-600'>Support</li>
        <li className='p-4 hover:text-amber-600'>Contact</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
        <AiOutlineMenu size={25} />
    </div>
    <ul className={nav ? 'fixed left-0 top-0 w-full z-10 h-full text-white bg-gray-900 items-center text-center ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <AiOutlineClose onClick={handleNav} className='absolute top-10 right-4' size={25} />
            <li className='hover:text-amber-600 text-lg p-4 mt-16'>Home</li>
            <li className='hover:text-amber-600 text-lg p-4 '>About Us</li>
            <li className='hover:text-amber-600 text-lg p-4 '>Support</li>
            <li className='hover:text-amber-600 text-lg p-4'>Contact</li>
    </ul>
    </div>
    </>
  );
};

export default Navbar;