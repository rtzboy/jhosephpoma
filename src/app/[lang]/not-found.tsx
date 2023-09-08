import Backbtn from '@/components/Backbtn';
import Image from 'next/image';

const NotFound = () => {
	return (
		<main className='max-w-7xl pt-[120px] mx-auto px-4 flex flex-col items-center gap-4'>
			<h3 className='text-2xl font-semibold'>Oops! Something happened</h3>
			<p className='text-lg'>
				Go <Backbtn name='back' />
			</p>
			<Image src='/notfound.svg' alt='capture' width={400} height={400} />
		</main>
	);
};

export default NotFound;
