import Contact from '@/components/Contact';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import env from '@/lib/env';
import Image from 'next/image';

const About = async ({ params }: { params: { lang: Locale } }) => {
	const { lang } = params;
	const { contact } = await getDictionary(lang);

	const langForm = {
		name: contact.form.name,
		email: contact.form.email,
		message: contact.form.message
	};

	const envKeys = {
		key: env.EMAILJS_KEY,
		service_key: env.EMAILJS_SERVICE_KEY,
		template_key: env.EMAILJS_TEMPLATE_KEY
	};

	return (
		<main className='flex-col gap-8 max-w-7xl pt-[100px] mx-auto flex px-4'>
			<h4 className='text-[40px] font-bold'>{contact.title}</h4>
			<div className='flex gap-12 flex-col sm:flex-row'>
				<div className='sm:w-[50%] sm:order-none order-last'>
					<Contact btnTxt={contact.form.btnSend} langForm={langForm} envKeys={envKeys} />
				</div>
				<div className='sm:w-[50%] flex flex-col items-center gap-4'>
					<div className='leading-loose text-lg'>
						{contact.description}{' '}
						<a
							href='mailto:japoma_200@hotmail.com'
							className='bg-clip-text shadow-text text-transparent bg-gradient-to-r from-cyan-400 font-bold to-emerald-300'
						>
							{contact.email}
						</a>
					</div>
					<Image src='/contactvector.svg' alt='capture' width={400} height={400} />
				</div>
			</div>
		</main>
	);
};
export default About;
