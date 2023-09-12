'use client';

import Image from 'next/image';
import Link from 'next/link';
import External from '../icons/External';

const Someprojects = ({ prevprojects, home_title, lang }: SomeProjectsT) => {
	return (
		<section className='max-w-7xl mx-auto py-[50px] sm:py-[150px] flex flex-col gap-8'>
			<h3 className='text-[40px] font-semibold'>{home_title.work}</h3>
			<article className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8'>
				{prevprojects.map(work => (
					<div
						key={work.name}
						className='p-4 rounded-xl bg-[#1c1c1c] hover:scale-[1.02] transition-all'
					>
						<div className='relative overflow-hidden h-72 mb-4'>
							<Image
								src={work.image}
								alt={work.name}
								fill={true}
								sizes='(min-width: 1360px) 363px, (min-width: 1060px) 26.43vw, (min-width: 720px) calc(50vw - 64px), (min-width: 400px) calc(100vw - 64px), calc(35vw + 183px)'
								className='object-cover'
							/>
						</div>
						<div className='flex flex-col justify-between gap-6'>
							<div className='font-bold text-2xl'>{work.name}</div>
							<div className='leading-7'>{work.description}</div>
							<ul className='flex gap-4'>
								{work.demo_links.map(link => (
									<li key={link.href}>
										<a href={link.href} target='_blank' rel='noreferrer' className='flex gap-2'>
											<Image src={link.icon} alt='demo' width={25} height={25} />
											<span>{link.to}</span>
										</a>
									</li>
								))}
							</ul>
							<ul className='flex gap-2 flex-wrap'>
								{work.tags.map(tag => (
									<li
										key={tag.name}
										className={`flex gap-1 items-center ${
											colors[tag.color as keyof typeof colors]
										} italic text-sm px-3 py-0.5 rounded-xl `}
									>
										<Image src={tag.image} alt={tag.name} width={20} height={20} />
										<div>{tag.name}</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</article>
			<footer className='flex justify-center'>
				<div className='inline-block'>
					<Link
						href={`${lang}/projects`}
						className='flex gap-2 items-center justify-center hover:underline decoration-2 hover:underline-offset-4'
					>
						<span className=''>{home_title.more}</span>
						<External className='h-5' />
					</Link>
				</div>
			</footer>
		</section>
	);
};

interface DemoLink {
	to: string;
	href: string;
	icon: string;
}

interface Tag {
	name: string;
	color: string;
	image: string;
}

type SomeProjectsT = {
	prevprojects: {
		name: string;
		details: string;
		description: string;
		tags: Tag[];
		image: string;
		demo_links: DemoLink[];
	}[];
	home_title: { work: string; more: string };
	lang: string;
};

const colors = {
	yellow: 'bg-yellow-500/20',
	blue: 'bg-blue-500/20',
	orange: 'bg-orange-600/20',
	teal: 'bg-teal-600/20',
	rose: 'bg-rose-600/20',
	green: 'bg-green-600/20',
	violet: 'bg-violet-600/20'
};

export default Someprojects;
