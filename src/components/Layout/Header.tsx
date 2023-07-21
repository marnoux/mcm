import {
  PhoneIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <div className="flex justify-between bg-[#e1f0fb] w-auto h-auto py-2 px-8 items-center">
      <a href="#">
        <img src="/img/logo.png" alt="logo" width={250} height={200} />
      </a>
      <div>
        <ul className="flex align-center gap-12">
          <li className="group flex align-center gap-2 text-align-center  hover:cursor-pointer animateHover">
            <div className="flex justify-center">
              <div className="flex gap-1">
                Store
                <ChevronDownIcon className="align-center h-auto w-4 transition duration-300 ease-in-out  group-hover:rotate-180 group:hover:translate-y-2 translate-y-0.5" />
              </div>
              <div className="rounded m-6 py-3 px-6 w-96 absolute z-auto  bg-[#f3f1f0] hidden group group-hover:block top-2">
                <ul className="overflow-hidden w-full">
                  <li className="mt-2">
                    <button className="w-full py-2 px-6">Decal kits</button>
                  </li>
                  <li className="mt-2">
                    <button className="w-full py-2 px-6">Estate agent products</button>
                  </li>
                  <li className="mt-2">
                    <button className="w-full py-2 px-6">Stickers and signboards</button>
                  </li>
                  <li className="mt-2">
                    <button className="w-full py-2 px-6">Vehicle branding</button>
                  </li>
                </ul>
              </div>
            </div>
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
        <div className="flex gap-4 pl-6">
          <a href="">
            <MagnifyingGlassIcon className="h-7 w-7 animateHover" />
          </a>
          <a href="https://decalsonline.co.za/" target="_blank">
            <ShoppingBagIcon className="h-7 w-7 animateHover" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
