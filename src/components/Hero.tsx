const Hero = () => {
	return (
		<div className='flex flex-col justify-start align-center text-center gap-20 bg-gradient-to-r from-sky-500 to-indigo-500 pb-14'>
			<div className='mt-14'>
				<h2 className='text-4xl text-slate-50 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
					We provide Vehicle Branding, Retail Store and Office Branding.
				</h2>
			</div>
			<div>
				<h1 className='text-6xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
					All your branding and decal needs, sorted!
				</h1>
			</div>
			<div>
				<p>Stickers, Signs and Designs.</p>
				<p>DIY decal kits, market related cost, fast turnaround time and delivered to your door.</p>
			</div>
		</div>
	);
};

export default Hero;
