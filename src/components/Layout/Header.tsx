import {
  PhoneIcon,
  EnvelopeIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <nav>
      <div className="flex justify-between bg-[#e1f0fb] w-auto h-auto py-2 px-8 items-center">
        {/* Desktop */}
        <div className="flex md:visible sm:hidden">
          <Link to="/">
            <img className="p-1" src="/img/logo.png" alt="logo" width={250} height={200} />
          </Link>
          <div>
            <ul className="flex align-center gap-12">
              <li className="group flex align-center gap-2 text-align-center  hover:cursor-pointer animateHover">
                <Link to="store" className="flex justify-center">
                  <div className="flex gap-1">
                    Store
                    <ShoppingBagIcon className="align-center h-auto w-4 transition duration-300 ease-in-out" />
                  </div>
                </Link>
              </li>
              <li className="animateHover hover:underline">
                <a href="/#about">About Us</a>
              </li>
              <li className="animateHover hover:underline">
                <a href="/#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-8 divide-x divide-gray-500">
            <div className="flex gap-4">
              <a href="tel:+27823363494" target="_blank">
                <PhoneIcon className="h-7 w-7 animateHover" />
              </a>
              <a href="mailto:arno@mcmpromotions.co.za" target="_blank">
                <EnvelopeIcon className="animateHover h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden sm:visible flex flex-row align-center items-center justify-between w-3/4">
          <Bars3Icon onClick={toggleNav} className="hover:cursor-pointer h-8 w-8" />
          <Link to="/">
            <img src="/img/logo.png" alt="logo" width={200} height={200} />
          </Link>
          <div
            className={`absolute bg-opacity-50 bg-gradient-to-r from-indigo-500 to-sky-500 h-[100vh] w-full top-0 
            right-0 z-20  ${
              showNav ? 'block' : 'hidden'
            } transition duration-1000 ease-in-out transform`}
          >
            <div className={`flex justify-end px-6 bg-[#e1f0fb] w-full h-12`}>
              <XMarkIcon
                className="w-10 animateHover hover:cursor-pointer hover:text-[#747bff]"
                onClick={toggleNav}
              />
            </div>
            <ul className="flex flex-col justify-center align-center text-center items-center gap-12 w-full mt-6 text-2xl shadowText ">
              <li
                onClick={toggleNav}
                className="group flex align-center gap-2 text-align-center  hover:cursor-pointer animateHover hover:text-white"
              >
                <Link to="store" className="flex justify-center">
                  <div className="flex gap-1">
                    Store
                    <ShoppingBagIcon className="align-center h-auto w-4 transition duration-300 ease-in-out" />
                  </div>
                </Link>
              </li>
              <li onClick={toggleNav} className="animateHover hover:underline">
                <a href="/#about">About Us</a>
              </li>
              <li onClick={toggleNav} className="animateHover hover:underline">
                <a href="/#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Store */}
        <Link to="store">
          <ShoppingBagIcon className="h-7 w-7 animateHover" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
