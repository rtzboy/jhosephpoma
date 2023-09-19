import Image from 'next/image';
import homeaboutme from '../../../public/home-aboutme.png';

type Props = {
	aboutme: { title: string; paragraph_1: string; paragraph_2: string };
};

const Aboutme = ({ aboutme }: Props) => {
	return (
		<section className='max-w-7xl mx-auto py-[50px] sm:py-[150px]'>
			<div className='grid gap-4 md:grid-cols-2 grid-cols-1'>
				<div className='relative h-[300px] md:h-auto sm:order-none order-last'>
					<Image src={homeaboutme} alt='homeaboutme' fill={true} className='object-contain' />
				</div>
				<div className='flex flex-col gap-8'>
					<h3 className='text-[40px] font-semibold'>{aboutme.title}</h3>
					<p className='leading-loose'>{aboutme.paragraph_1}</p>
					<p className='leading-loose'>{aboutme.paragraph_2}</p>
				</div>
			</div>
		</section>
	);
};

export default Aboutme;
