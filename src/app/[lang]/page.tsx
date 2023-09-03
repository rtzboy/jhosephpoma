import Image from 'next/image';
import backline from '../../../public/backline.png';

const Home = async () => {
	return (
		<main>
			<section className='h-screen'>
				<div className='absolute inset-0 bot_transparent'>
					<Image src={backline} alt='backline' className='absolute z-0 w-full h-full opacity-10' />
				</div>
			</section>
			<section className='h-screen'></section>
			<section className='h-screen'></section>
		</main>
	);
};

export default Home;
