const Footer = () => {
  return (
    <div className="bg-[#9aaab8] flex flex-col items-center justify-center">
      <p className="mt-3">© {new Date().getFullYear()} MCM Promotions</p>
      <p className="mb-3">
        Created by{' '}
        <a
          className="hover:underline text-sky-50 transition-colors duration-200 hover:text-teal-400"
          href="https://www.marnoux.dev"
          target="_blank"
        >
          Marnoux
        </a>
      </p>
    </div>
  );
};

export default Footer;
