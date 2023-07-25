const Store = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-sky-500/60 to-indigo-500/50 h-auto">
      <div className="flex flex-col justify-start align-center text-center gap-8 px-12 rounded-lg shadow-2xl shadow-black mx-12 my-8 py-4 bg-transparent w-full max-w-[75vw]">
        <h1 className="shadowText text-4xl mt-4">
          🚀 We've UPGRADED to a new and improved{' '}
          <a
            className="underline hover:cursor-pointer hover:text-sky-500 transition-colors duration-300"
            href="https://decalsonline.co.za/"
            target="_blank"
          >
            Online Store!
          </a>
        </h1>
        <div className="flex sm:flex-col">
          <div className="flex flex-col justify-start align-center text-center gap-8 px-6 rounded-lg shadow-2xl shadow-black mx-6 my-4 py-2 bg-transparent w-1/2 hover:-skew-y-3 transition-transform duration-200 sm:w-full sm:mx-0">
            <h1 className="text-2xl shadowText">🎉 Embrace the Future</h1>
            <p className="shadowText text-xl">
              Enjoy a seamless experience with a sleek design and lightning-fast navigation.
            </p>
          </div>
          <div className="flex flex-col justify-start align-center text-center gap-8 px-6 rounded-lg shadow-2xl shadow-black mx-6 my-4 py-2 bg-transparent w-1/2 hover:skew-y-3 transition-transform duration-200 sm:w-full sm:mx-0">
            <h1 className="text-2xl shadowText">💡 Seamless Shopping</h1>
            <p className="shadowText text-xl">Discover more products to suit your every need.</p>
          </div>
        </div>

        <div className="flex sm:flex-col">
          <div className="flex flex-col justify-start align-center text-center gap-8 px-6 rounded-lg shadow-2xl shadow-black mx-6 my-4 py-2 bg-transparent w-1/2 hover:-skew-y-3 transition-transform duration-200 sm:w-full sm:mx-0">
            <h1 className="text-2xl shadowText">💯 Top-notch Security</h1>
            <p className="shadowText text-xl">
              Your safety is our priority with advanced protection.
            </p>
          </div>
          <div className="flex flex-col justify-start align-center text-center gap-8 px-6 rounded-lg shadow-2xl shadow-black mx-6 my-4 py-2 bg-transparent w-1/2 hover:skew-y-3 transition-transform duration-200 sm:w-full sm:mx-0">
            <h1 className="text-2xl shadowText">🛍️ Extensive Selection </h1>
            <p className="shadowText text-xl"> Discover more products to suit your every need.</p>
          </div>
        </div>
        <div>
          <a href="https://decalsonline.co.za" className="animateHover" target="_blank">
            <button className="rounded w-full py-2 px-4 animateHover max-w-xs text-gray-500  border border-gray-500 hover:border-purple-500 hover:text-purple-500">
              Shop now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Store;
