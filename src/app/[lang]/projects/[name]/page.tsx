import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { notFound } from 'next/navigation';

type StaticParamsT = {
	params: { lang: Locale };
};

type Props = {
	params: { name: string; lang: Locale };
};

export const dynamicParams = true;

export const generateStaticParams = async ({ params }: StaticParamsT) => {
	const { project_details } = await getDictionary(params.lang);
	return project_details.map(project => ({ name: project.id }));
};

const getProjectDetails = async (lang: Locale, name: string) => {
	const { project_details } = await getDictionary(lang);
	const project = project_details.find(project => project.id === name);
	if (!project) {
		notFound();
	}
	return project;
};

const ProjectName = async ({ params }: Props) => {
	const project = await getProjectDetails(params.lang, params.name);

	return (
		<main className='flex-col gap-10 max-w-7xl pt-[100px] mx-auto flex px-4'>
			ProjectName: {project.description}
		</main>
	);
};

export default ProjectName;
