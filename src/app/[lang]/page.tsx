import HomeBtns from '@/components/buttons/HomeBtns';
import ToBottom from '@/components/buttons/ToBottom';
import Aboutme from '@/components/home/Aboutme';
import Someprojects from '@/components/home/Someprojects';
import Blob from '@/components/icons/Blob';
import Github from '@/components/icons/Github';
import Instagram from '@/components/icons/Instagram';
import Linkedin from '@/components/icons/Linkedin';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import backline from '../../../public/backline.png';
import homeright from '../../../public/home-right.png';
import jpdevlogo from '../../../public/jpdevlogo.png';

const Home = async ({ params }: { params: { lang: Locale } }) => {
	const { lang } = params;
	const { home, preview_projects, aboutme } = await getDictionary(lang);

	return (
		<main className='px-4'>
			<section className='h-screen relative'>
				<div className='absolute inset-0 bot_transparent'>
					<Image
						src={backline}
						fill={true}
						alt='backline'
						className='-z-[15] w-full h-full opacity-10'
					/>
				</div>
				<div className='flex md:flex-row flex-col gap-4 max-w-7xl sm:pt-[200px] pt-[100px] mx-auto'>
					<div className='relative md:w-[50%] flex flex-col gap-6'>
						<div className='absolute inset-0 -z-10'>
							<Image
								src={jpdevlogo}
								fill={true}
								alt='jpdevlogo'
								className='opacity-5 object-cover'
							/>
						</div>
						<div className='flex items-center'>
							<span className='text-[30px] font-semibold md:text-[50px]'>{home.first}</span>
							<span className='inline-block animate-waving text-[40px]'>👋</span>
						</div>
						<div className='text-[40px] font-bold md:text-[50px]'>
							<span className='bg-clip-text shadow-text text-transparent bg-gradient-to-r from-emerald-400 font-bold to-cyan-300'>
								Jhoseph Poma{' '}
							</span>
							<span>{home.second}</span>
						</div>
						<div className='text-xl leading-loose'>{home.description}</div>
						<ul className='flex w-full gap-12'>
							{socialLinks.map(social => (
								<li key={social.id}>
									<a href={social.link} target='_blank' rel='noreferrer'>
										{social.icon}
									</a>
								</li>
							))}
						</ul>
						<HomeBtns lang={lang} />
					</div>
					<div className='md:w-[50%] relative overflow-hidden'>
						<div className='flex items-center justify-center'>
							<Blob className='md:h-[500px] h-[350px] opacity-10' />
						</div>
						<Image src={homeright} fill={true} alt='xd' className='object-contain' />
					</div>
				</div>
				<div className='max-w-7xl mx-auto flex justify-center py-8'>
					<ToBottom />
				</div>
			</section>
			<Aboutme aboutme={aboutme} />
			<Someprojects prevprojects={preview_projects} home_title={home} lang={lang} />
		</main>
	);
};

export const socialLinks = [
	{
		id: 1,
		name: 'Github',
		link: 'https://github.com/rtzboy',
		icon: (
			<Github
				style={{ filter: 'drop-shadow(0px 0px 3px rgba(110, 231, 183,.7))' }}
				className='h-9'
			/>
		)
	},
	{
		id: 2,
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/jpomadev/',
		icon: (
			<Linkedin
				style={{ filter: 'drop-shadow(0px 0px 3px rgba(103, 232, 249,1))' }}
				className='h-9'
			/>
		)
	},
	{
		id: 3,
		name: 'Instagram',
		link: 'https://www.instagram.com/jhoseph2212/',
		icon: (
			<Instagram
				style={{ filter: 'drop-shadow(0px 0px 3px rgba(110, 231, 183,.7))' }}
				className='h-9'
			/>
		)
	}
];

export default Home;
