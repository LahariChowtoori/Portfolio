import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/LC_logo new.jpg';
import { Link } from 'react-scroll';

const Navbar_New  = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='bg-[black] fixed bg-opacity-100
    w-full h-[80px] flex justify-between items-center px-4 text-gray-300 z-100' id='navbar'>
      <div>
      <a href="/">
          <img src={Logo} alt='Logo Image' style={{ width: '200px', cursor: 'pointer' }} />
        </a>
      </div>
      
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
        <a href="/" smooth={true} duration={500}>           
          <button className='inline border-b-4 border-gray-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-300 hover:text-white-600'>
          Home
        </button>            
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        <a href="/" smooth={true} duration={500}>           
          <button className='inline border-b-4 border-gray-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-300 hover:text-white-600'>
          Home
        </button>            
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[27%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/lahari-chowtoori/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/LahariChowtoori'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1oDWqvbKSTsRud2QaKsjhHsFbX9_rZ9l6/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar_New;
