import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import React from 'react';

const navLinks = [
	{ id: 'hero', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'contact', label: 'Contact' },
];

export default function Navbar({ onNavClick }) {
	const [open, setOpen] = useState(false);

	return (
		<nav className='fixed w-full z-50 bg-black/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-700'>
			<div className='max-w-6xl mx-auto flex items-center justify-between px-4 py-3'>
				<div className='text-4xl font-bold text-neon-green'>My Portfolio</div>
				<div className='hidden md:flex space-x-8'>
					{navLinks.map((link) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							onClick={(e) => {
								e.preventDefault();
								onNavClick(link.id);
							}}
							className='cursor-pointer hover:text-pastel-pink transition'
						>
							{link.label}
						</a>
					))}
					<ThemeToggle />
				</div>
				<div className='md:hidden flex items-center'>
					<ThemeToggle />
					<button
						className='ml-2 text-2xl'
						onClick={() => setOpen(!open)}
						aria-label='Toggle Menu'
					>
						{open ? <FiX /> : <FiMenu />}
					</button>
				</div>
			</div>
			{open && (
				<div className='md:hidden bg-black dark:bg-gray-900 px-4 py-2 space-y-2'>
					{navLinks.map((link) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							onClick={(e) => {
								e.preventDefault();
								onNavClick(link.id);
								setOpen(false);
							}}
							className='block py-2 text-lg hover:text-pastel-pink'
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}

