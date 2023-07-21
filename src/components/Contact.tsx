import { AddressMap } from './AdressMap';

const Contact = () => {
	return (
		<div className='flex justify-around gap-12 p-12 h-full bg-[#ffffff]'>
			<div className='rounded-full'>
				<AddressMap />
			</div>

			<div className='flex flex-col gap-5 w-64'>
				<h1 className='text-2xl font-bold'>Contact Us</h1>
				<p>We deliver everywhere in South Africa</p>
				<p>
					Feel free to contact us and one of our trained agents will come back to you as soon as
					possible
				</p>
				<h2 className='text-xl font-bold'>Our physical store address</h2>
				<p>
					209 6th St, Rietkol AH, Delmas, 2200{' '}
					<a href='https://www.google.com/maps/dir/?api=1&destination=VH43%2BCP+Delmas'>
						Get directions
					</a>
				</p>
				<h2 className='text-xl font-bold'>Operating hours</h2>
				<p>Daily 07:30 AM — 4:30 PM Closed on weekends & public holidays</p>
				<h2 className='text-xl font-bold'>Get in touch with us</h2>
				<a href='tel:+27823363494' target='_blank'>
					Arno Manser +27 82 336 3494{' '}
				</a>
				<a href='mailto:arno@mcmpromotions.co.za' target='_blank'>
					arno@mcmpromotions.co.za
				</a>
			</div>
		</div>
	);
};

export default Contact;
