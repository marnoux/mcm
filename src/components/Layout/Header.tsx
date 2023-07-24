import { PhoneIcon, EnvelopeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between bg-[#e1f0fb] w-auto h-auto py-2 px-8 items-center">
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
          <Link to="store" className="flex gap-4 pl-6">
            <ShoppingBagIcon className="h-7 w-7 animateHover" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
