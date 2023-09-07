'use client';
import useContainNode from '@/lib/hooks/useContainNode';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import spainflag from '../../public/spainflag.svg';
import usaflag from '../../public/usaflag.svg';
import { i18n } from '../i18n-config';
import Triangle from './icons/Triangle';

const LangSwitcher = ({ lang }: { lang: string }) => {
	const pathName = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const refLi = useRef<HTMLLIElement>(null);

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	useContainNode(refLi.current, isOpen, setIsOpen);

	let openEffect = isOpen ? 'shadow-inner' : '';

	return (
		<li ref={refLi} className={`relative shadow-gray-400 rounded-lg transition-all ${openEffect}`}>
			<div
				className='flex items-center gap-1 relative select-none px-2 py-1.5'
				onClick={() => setIsOpen(!isOpen)}
			>
				<Image src={lang === 'es' ? spainflag : usaflag} alt='spain' width={25} />
				<Triangle className={`h-4 transition-all ${isOpen ? 'rotate-180' : ''}`} />
			</div>
			{isOpen && (
				<ul className='gap-2 bg-[#1c1c1c] absolute flex flex-col p-2 rounded-lg w-[130px] right-0 -bottom-[100px]'>
					{i18n.locales.map(locale => {
						return (
							<li key={locale} className='hover:bg-black/25 rounded-lg'>
								<Link href={redirectedPathName(locale)} className='flex gap-2 px-2 py-1'>
									<Image src={locale === 'es' ? spainflag : usaflag} alt='spain' width={25} />
									<span>{locale === 'es' ? 'Español' : 'English'}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</li>
	);
};

export default LangSwitcher;
