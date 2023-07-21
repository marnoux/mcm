import {
	PhoneIcon,
	EnvelopeIcon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	ChevronDownIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
	return (
		<div className='flex justify-between bg-[#e1f0fb] w-auto h-auto p-4 px-8 items-center'>
			<a href='#'>
				<img src='/src/assets/img/logo.png' alt='logo' width={200} height={200} />
			</a>
			<div>
				<ul className='flex align-center gap-12'>
					<li className='flex align-center gap-2 text-align-center'>
						Store
						<ChevronDownIcon className='align-center h-auto w-3' />
					</li>
					<li>
						<a href='/#about'>About Us</a>
					</li>
					<li>
						<a href='/#contact'>Contact Us</a>
					</li>
				</ul>
			</div>
			<div className='flex gap-8 divide-x divide-gray-500'>
				<div className='flex gap-4'>
					<a href='tel:+27823363494' target='_blank'>
						<PhoneIcon className='h-7 w-7' />
					</a>
					<a href='mailto:arno@mcmpromotions.co.za' target='_blank'>
						<EnvelopeIcon className='h-7 w-7' />
					</a>
				</div>
				<div className='flex gap-4 pl-6'>
					<MagnifyingGlassIcon className='h-7 w-7' />
					<ShoppingBagIcon className='h-7 w-7' />
				</div>
			</div>
		</div>
	);
};

export default Header;
