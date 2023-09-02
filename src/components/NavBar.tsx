'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoname from '../../public/logo.png';
import LangSwitcher from './lang-switcher';

type NavbarT = {
	links: { id: number; href: string; name: string }[];
	lang: string;
};

const NavBar = ({ links, lang }: NavbarT) => {
	const pathname = usePathname();
	return (
		<nav className='h-[60px] relative px-8'>
			<div className='max-w-7xl w-full h-full flex items-center justify-between mx-auto'>
				<h1 className='flex items-center gap-4 text-xl'>
					<Image src={logoname} width={30} height={30} alt='jhoseph' />
					Jhoseph Poma
				</h1>
				<ul className='flex gap-4 items-center'>
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
								<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 ease-in-out group-hover:w-1/2' />
								<span className='absolute bottom-0 right-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 ease-in-out group-hover:w-1/2' />
								{isActive && (
									<span className='absolute bottom-0 right-0 w-full h-0.5 bg-gray-500' />
								)}
							</li>
						);
					})}
					<LangSwitcher lang={lang} />
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
