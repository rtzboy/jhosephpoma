import { socialLinks } from '@/app/[lang]/page';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import Link from 'next/link';
import logoname from '../../../public/logo_dark.png';

const Footer = ({ lang }: { lang: Locale }) => {
	return (
		<footer className='max-w-7xl mx-auto py-8 flex flex-col gap-8 items-center'>
			<div>
				<Link href={`/${lang}`} className='flex items-center gap-4 text-3xl'>
					<Image
						src={logoname}
						alt='jhoseph'
						width={40}
						height={40}
						style={{ filter: 'drop-shadow(0px 0px 3px rgba(110, 231, 183,0.4))' }}
						quality={100}
					/>
					<span className='bg-clip-text shadow-text text-transparent bg-gradient-to-r from-cyan-400 font-bold to-emerald-300'>
						Jhoseph
					</span>
				</Link>
			</div>
			<div>
				<ul className='flex w-full gap-12'>
					{socialLinks.map(social => (
						<li key={social.id}>
							<a href={social.link} target='_blank' rel='noreferrer'>
								{social.icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
