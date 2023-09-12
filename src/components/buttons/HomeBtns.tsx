'use client';

import { Locale } from '@/i18n-config';

type Props = {
	lang: Locale;
};

const HomeBtns = ({ lang }: Props) => {
	let ES_URL = 'https://drive.google.com/file/d/1g9Aw17jbEMU4d5ak7hIaht3b8pJsHxKI/view?usp=sharing';
	let EN_URL = 'https://drive.google.com/file/d/1RVNnNyjNEyVO5QsCRvnKhaH6muCaaMzM/view?usp=sharing';

	let showCV = lang === 'en' ? EN_URL : ES_URL;

	return (
		<div className='flex gap-4 items-center py-2'>
			<div className='p-0.5 bg-gradient-to-r from-emerald-400 to-cyan-300 rounded-md group'>
				<a
					href='mailto:japoma_200@hotmail.com'
					className='inline-block px-8 py-2 text-black font-bold text-sm rounded-md group-hover:bg-[#121212] bg-gradient-to-r from-emerald-400 to-cyan-300 transition-colors group-hover:from-transparent group-hover:to-transparent group-hover:text-white'
				>
					HIRE ME
				</a>
			</div>
			<div className='p-0.5 bg-gradient-to-r from-cyan-400 to-emerald-300 rounded-md group'>
				<a
					href={showCV}
					target='_blank'
					rel='noreferrer'
					className='inline-block px-8 py-2 text-white font-bold text-sm rounded-md bg-[#121212] group-hover:bg-gradient-to-r transition-all group-hover:from-cyan-400 group-hover:to-emerald-300 group-hover:text-black'
				>
					SEE CV
				</a>
			</div>
		</div>
	);
};

export default HomeBtns;
