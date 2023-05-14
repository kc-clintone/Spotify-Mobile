import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
	HiOutlineMusicNote,
	HiOutlineFolder,
	HiOutlineHashtag,
	HiOutlineHome,
	HiOutlineMenu,
	HiOutlinePhotograph,
	HiOutlineUserGroup,
	HiUserCircle,
} from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
// links
const links = [
	{ name: 'Discover', to: '/', icon: HiOutlineHome },
	{ name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
	{ name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
	{ name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
// user options
// TODO: MAKE PAGES FOR THE FOLLOWING LINKS
const options = [
	{ name: 'Playlists', to: '/', icon: HiOutlineMusicNote },
	{ name: 'Library', to: '/', icon: HiOutlineFolder },
	{ name: 'Account', to: '/', icon: HiUserCircle },
];

// nalinks component
const NavLinks = ({ handleClick }) => (
	<div className='border-b-2 '>
		{links.map((item) => (
			<NavLink
				key={item.name}
				to={item.to}
				className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
				onClick={() => handleClick && handleClick()}
			>
				<item.icon className='w-6 h-6 mr-4' />
				{item.name}
			</NavLink>
		))}
	</div>
);
// user options component
const UserTools = ({ handleClick }) => (
	<div>
		{options.map((item) => (
			<NavLink
				key={item.name}
				to={item.to}
				className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
				onClick={() => handleClick && handleClick()}
			>
				<item.icon className='w-6 h-6 mr-4' />
				{item.name}
			</NavLink>
		))}
	</div>
);

const Sidebar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='md:flex hidden flex-col w-[240px] px-4 bg-[#19113e]'>
				<NavLinks />
				<UserTools />
			</div>

			{/* Mobile sidebar */}
			<div className='absolute md:hidden block top-6 right-3'>
				{!mobileMenuOpen ? (
					<HiOutlineMenu
						className='w-6 h-6 mr-2 text-white'
						onClick={() => setMobileMenuOpen(true)}
					/>
				) : (
					<RiCloseLine
						className='w-6 h-6 mr-2 text-white'
						onClick={() => setMobileMenuOpen(false)}
					/>
				)}
			</div>

			<div
				className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
					mobileMenuOpen ? 'left-0' : '-left-full'
				}`}
			>
				<NavLinks handleClick={() => setMobileMenuOpen(false)} />
			</div>
		</>
	);
};

export default Sidebar;
