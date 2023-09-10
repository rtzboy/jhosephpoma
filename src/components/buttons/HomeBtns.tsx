'use client';

type Props = {};

const HomeBtns = (props: Props) => {
	return (
		<div className='flex gap-4 items-center py-2'>
			<div className='p-0.5 bg-gradient-to-r from-emerald-400 to-cyan-300 rounded-md group'>
				<button className='inline-block px-8 py-2 text-black font-bold text-sm rounded-md group-hover:bg-[#121212] bg-gradient-to-r from-emerald-400 to-cyan-300 transition-colors group-hover:from-transparent group-hover:to-transparent group-hover:text-white'>
					HIRE ME
				</button>
			</div>
			<div className='p-0.5 bg-gradient-to-r from-cyan-400 to-emerald-300 rounded-md group'>
				<button className='inline-block px-8 py-2 text-white font-bold text-sm rounded-md bg-[#121212] group-hover:bg-gradient-to-r transition-all group-hover:from-cyan-400 group-hover:to-emerald-300 group-hover:text-black'>
					SEE CV
				</button>
			</div>
		</div>
	);
};

export default HomeBtns;
