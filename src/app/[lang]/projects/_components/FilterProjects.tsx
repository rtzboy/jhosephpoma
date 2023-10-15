'use client';

import { Locale } from '@/i18n-config';
import { Work } from '@/models/Work';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

type Props = {
	projects: Work[];
	lang: Locale;
	filter: string;
};

const FilterProjects = ({ projects, lang, filter }: Props) => {
	const searchFilters = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const createQueryString = useCallback(
		(filter: string, value: string) => {
			const newURL = new URLSearchParams(searchFilters);
			newURL.set(filter, value);
			return newURL.toString();
		},
		[searchFilters]
	);

	const filterWorks = useMemo(() => {
		return projects.filter(
			project =>
				!searchFilters.get('filter') ||
				project.tags.map(tag => tag.name).includes(searchFilters.get('filter')!)
		);
	}, [projects, searchFilters]);

	return (
		<>
			<Link
				href={`/${lang}/projects`}
				scroll={false}
				className='text-3xl font-semibold self-start hover:text-cyan-300'
			>
				{filter}
			</Link>
			<section className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 justify-items-center'>
				<AnimatePresence mode='popLayout'>
					{filterWorks.map(work => (
						<motion.div
							layout
							layoutId={work.name}
							initial={{ scale: 0.6, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.6, opacity: 0 }}
							key={work.name}
							className='p-4 rounded-xl bg-[#1c1c1c] max-w-md'
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
										<li key={link.href} className='hover:text-cyan-300'>
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
											className={`${colors[tag.color as keyof typeof colors]} rounded-xl`}
										>
											<button
												onClick={() => {
													router.push(pathname + '?' + createQueryString('filter', `${tag.name}`), {
														scroll: false
													});
												}}
												className='flex gap-1 items-center italic text-sm px-2 py-0.5 rounded-xl'
											>
												<Image src={tag.image} alt={tag.name} width={20} height={20} />
												{tag.name}
											</button>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</section>
		</>
	);
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

export default FilterProjects;
