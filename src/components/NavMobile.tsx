import useContainNode from '@/lib/hooks/useContainNode';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { NavbarT } from './NavBar';
import Menu from './icons/Menu';
import Menu2 from './icons/Menu2';
import LangSwitcher from './lang-switcher';

const NavMobile = ({ links, lang }: NavbarT) => {
	const [openMenu, setOpenMenu] = useState(false);
	const parentEle = useRef<HTMLDivElement>(null);

	useContainNode(parentEle.current, openMenu, setOpenMenu);

	return (
		<div ref={parentEle} className='relative sm:hidden'>
			<button onClick={() => setOpenMenu(!openMenu)}>
				{openMenu ? <Menu2 className='h-8' /> : <Menu className='h-8' />}
			</button>
			{openMenu && (
				<ul className={`flex flex-col absolute top-10 right-0 bg-[#1c1c1c] p-2 rounded-lg`}>
					{links.map(link => {
						return (
							<li key={link.id} className='relative'>
								<Link href={`/${lang}${link.href}`} className='block px-2 py-1'>
									{link.name}
								</Link>
							</li>
						);
					})}
					<LangSwitcher lang={lang} />
				</ul>
			)}
		</div>
	);
};

export default NavMobile;
