'use client';

import { useRouter } from 'next/navigation';

const Backbtn = ({ name }: { name: string }) => {
	const router = useRouter();

	return (
		<button
			type='button'
			onClick={() => router.back()}
			className='text-cyan-300 border-b border-cyan-300'
		>
			{name}
		</button>
	);
};

export default Backbtn;
