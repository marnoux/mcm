import { AddressMap } from './AdressMap';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row sm:text-center justify-around gap-12 p-12 bg-[#ffffff]">
      <div className="rounded-full">
        <AddressMap />
      </div>
      <div className="flex flex-col gap-5 max-w-4xl">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p>We deliver everywhere in South Africa</p>
        <p>
          Feel free to contact us and one of our trained agents will come back to you as soon as
          possible
        </p>
        <h2 className="text-xl font-bold">Our physical store address</h2>
        <div className="flex flex-col justify-center align-center">
          <p>209 6th St, Rietkol AH, Delmas, 2200</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=VH43%2BCP+Delmas"
            target="_blank"
          >
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl w-48 mt-3 animateHover">
              Get directions
            </button>
          </a>
        </div>
        <h2 className="text-xl font-bold">Operating hours</h2>
        <p>Daily 07:30 AM — 4:30 PM Closed on weekends & public holidays</p>

        <h2 className="text-xl font-bold">Get in touch with us</h2>
        <div className="flex flex-col align-center sm:items-center">
          <a href="tel:+27823363494" target="_blank" className="flex gap-2 animateHover w-auto">
            <PhoneIcon className="h-auto w-3 " /> +27 82 336 3494
          </a>
          <a
            href="mailto:arno@mcmpromotions.co.za"
            target="_blank"
            className="flex gap-2 animateHover"
          >
            <EnvelopeIcon className="align-center h-auto w-3 " /> arno@mcmpromotions.co.za
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
