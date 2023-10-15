import Title from '@/components/Title';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import FilterProjects from './_components/FilterProjects';

type ProjectsT = { params: { lang: Locale }; searchParams: { filter: string } };

const Projects = async ({ params, searchParams }: ProjectsT) => {
	const { lang } = params;
	const { project } = await getDictionary(lang);

	return (
		<main className='flex-col gap-10 max-w-7xl pt-[100px] mx-auto flex px-4'>
			<Title title='Jhoseph Poma | Projects' />
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
			<FilterProjects projects={project.works} lang={lang} filter={project.filter} />
		</main>
	);
};

export default Projects;
