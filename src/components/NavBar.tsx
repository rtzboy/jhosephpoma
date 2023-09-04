'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import logoname from '../../public/logo_dark.png';
import LangSwitcher from './lang-switcher';

type NavbarT = {
	links: { id: number; href: string; name: string }[];
	lang: string;
};

const NavBar = ({ links, lang }: NavbarT) => {
	const pathname = usePathname();
	const [floatingNav, setFloatingNav] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setFloatingNav(true);
			} else {
				setFloatingNav(false);
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className='h-[80px] relative'>
			<div className='max-w-7xl w-full px-8 h-full flex items-center justify-between mx-auto'>
				<h1>
					<Link href={`/${lang}`} className='flex items-center gap-4 text-2xl'>
						<Image
							src={logoname}
							width={35}
							style={{ filter: 'drop-shadow(0px 0px 3px rgba(110, 231, 183,0.4))' }}
							height={35}
							quality={100}
							alt='jhoseph'
						/>
						<span className='bg-clip-text shadow-text text-transparent bg-gradient-to-r from-cyan-400 font-bold to-emerald-300'>
							Jhoseph Poma
						</span>
					</Link>
				</h1>
				<ul className='flex gap-8 items-center'>
					{links.map(link => {
						let linkClass =
							`/${lang}${link.href}`.length === 4
								? `/${lang}${link.href}`.slice(0, -1)
								: `/${lang}${link.href}`;
						let isActive = linkClass === pathname;
						return (
							<li key={link.id} className='group relative'>
								<Link href={`/${lang}${link.href}`} className=''>
									{link.name}
								</Link>
								<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-1/2' />
								<span className='absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-1/2' />
								{isActive && <span className='absolute bottom-0 right-0 w-full h-0.5 bg-white' />}
							</li>
						);
					})}
					<LangSwitcher lang={lang} />
				</ul>
			</div>
			<ul
				className={`flex transition-all duration-500 text-emerald-300 navbar-nav justify-center gap-16 h-[70px] items-center fixed backdrop-blur-[8px] w-full ${
					floatingNav ? 'opacity-100 visible top-0' : 'opacity-0 invisible -top-16'
				}`}
			>
				{links.map(link => {
					let linkClass =
						`/${lang}${link.href}`.length === 4
							? `/${lang}${link.href}`.slice(0, -1)
							: `/${lang}${link.href}`;
					let isActive = linkClass === pathname;
					return (
						<li key={link.id} className='group relative nav-item transition-all duration-500'>
							<Link href={`/${lang}${link.href}`}>{`${link.name}`}</Link>
							<span className='pointer-events-none absolute rotate-[110deg] bottom-3 -left-7 w-0 h-0.5 bg-emerald-300 transition-all duration-300 ease-in-out group-hover:w-[20px]' />
							<span className='pointer-events-none absolute rotate-[110deg] bottom-3 -left-5 w-0 h-0.5 bg-emerald-300 transition-all duration-300 ease-in-out group-hover:w-[20px]' />
							{isActive && (
								<>
									<span className='pointer-events-none absolute rotate-[110deg] bottom-3 -left-7 w-[20px] h-0.5 bg-emerald-300 transition-all duration-300 ease-in-out' />
									<span className='pointer-events-none absolute rotate-[110deg] bottom-3 -left-5 w-[20px] h-0.5 bg-emerald-300 transition-all iduration-300 ease-in-out' />
								</>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
