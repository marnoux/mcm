const Hero = () => {
  return (
    <div className="flex flex-col justify-start align-center text-center gap-20 bg-gradient-to-r from-sky-500 to-indigo-500 pb-14">
      <div className="mt-14 z-10">
        <h2 className="text-4xl shadowText">
          We provide Vehicle Branding, Retail Store and Office Branding.
        </h2>
      </div>
      <div>
        <h1 className="text-6xl shadowText">All your branding and decal needs, sorted!</h1>
      </div>
      <div>
        <p className="text-lg shadowText">Stickers, Signs and Designs.</p>
        <p className="text-lg shadowText">
          DIY decal kits, market related cost, fast turnaround time and delivered to your door.
        </p>
      </div>
      <div>
        <a href="https://decalsonline.co.za" className="animateHover" target="_blank">
          <button className="rounded w-full py-2 px-4 animateHover max-w-xs text-gray-500  border border-gray-500 hover:border-purple-500 hover:text-purple-500">
            Shop now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
