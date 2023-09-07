import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';

type ProjectsT = { params: { lang: Locale } };

const colorsxd = {
	yellow: 'bg-yellow-500/20',
	blue: 'bg-blue-500/20',
	orange: 'bg-orange-600/20',
	teal: 'bg-teal-600/20',
	rose: 'bg-rose-600/20',
	green: 'bg-green-600/20',
	violet: 'bg-violet-600/20'
};

const Projects = async ({ params }: ProjectsT) => {
	const { lang } = params;
	const { project } = await getDictionary(lang);

	return (
		<main className='flex-col gap-10 max-w-7xl pt-[100px] mx-auto flex px-4'>
			<h2 className='text-[40px] font-bold'>{project.title}</h2>
			<section className='flex flex-col gap-8 md:flex-row'>
				<p className='leading-loose md:w-[50%]'>{project.description}</p>
				<div className='md:w-[50%] relative'>
					<video
						src='https://res.cloudinary.com/dgg98rkmj/video/upload/v1693875047/loopExplorer_juohmn.mp4'
						autoPlay
						loop
						muted
						className='rounded-2xl w-auto'
					/>
					<span className='absolute top-2 left-2'>
						<a
							href='https://platexplorerjpdev.netlify.app/'
							target='_blank'
							rel='noreferrer'
							className='px-2 py-0.5 rounded-lg bg-cyan-700'
						>
							Open
						</a>
					</span>
				</div>
			</section>
			<h3 className='text-3xl font-semibold'>Tuvieja</h3>
			<section className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8'>
				{project.works.map(work => (
					<div key={work.name} className='p-4 rounded-xl bg-[#1c1c1c]'>
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
											colorsxd[tag.color as keyof typeof colorsxd]
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
			</section>
		</main>
	);
};

export default Projects;
