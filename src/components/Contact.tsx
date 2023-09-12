'use client';

import emailjs from '@emailjs/browser';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

type Props = {
	btnTxt: string;
	langForm: { name: string; email: string; message: string };
	envKeys: { key: string; service_key: string; template_key: string };
};

const Contact = ({ btnTxt, langForm, envKeys }: Props) => {
	const [formDetails, setFormDetails] = useState({ name: '', email: '', message: '' });
	const [loading, setLoading] = useState(false);
	const txtMessage = useRef<HTMLTextAreaElement>(null);

	const handleFormChange = (evt: ChangeEvent<HTMLInputElement>) =>
		setFormDetails({ ...formDetails, [evt.target.name]: cutTxt(evt.target.value, 50) });

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setLoading(true);

		const response = await emailjs.send(
			envKeys.service_key,
			envKeys.template_key,
			{
				from_name: formDetails.name,
				to_name: 'Armando',
				from_email: formDetails.email,
				to_email: 'japoma_200@hotmail.com',
				message: formDetails.message
			},
			envKeys.key
		);
		if (response.status === 200) {
			setLoading(false);
			setFormDetails({ name: '', email: '', message: '' });
			alert('Thank you! :)');
		} else {
			setLoading(false);
		}
	};

	useEffect(() => {
		txtMessage.current!.style.height = '0px';
		const scrollHeight = txtMessage.current?.scrollHeight;
		txtMessage.current!.style.height = scrollHeight + 'px';
	}, [formDetails.message]);

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-8 bg-[#1c1c1c] p-4 rounded-xl'>
			<label>
				<span className='mb-2 inline-block'>{langForm.name}</span>
				<input
					onChange={handleFormChange}
					value={formDetails.name}
					type='text'
					name='name'
					className='bg-[#2b2b2b] px-3 py-2 outline-none w-full rounded-lg'
				/>
			</label>
			<label>
				<span className='mb-2 inline-block'>{langForm.email}</span>
				<input
					onChange={handleFormChange}
					value={formDetails.email}
					type='email'
					name='email'
					className='bg-[#2b2b2b] px-3 py-2 outline-none w-full rounded-lg'
				/>
			</label>
			<label>
				<span className='mb-2 inline-block'>{langForm.message}</span>
				<textarea
					ref={txtMessage}
					value={formDetails.message}
					onChange={evt =>
						setFormDetails({ ...formDetails, message: cutTxt(evt.target.value, 250) })
					}
					className='bg-[#2b2b2b] px-3 py-2 outline-none w-full h-full rounded-lg resize-none overflow-hidden max-h-60'
				></textarea>
			</label>
			<button
				disabled={!formDetails.name || !formDetails.email || !formDetails.message || loading}
				className='disabled:opacity-50 bg-gradient-to-r from-emerald-400 font-bold to-cyan-300 text-black rounded-lg py-2'
			>
				{btnTxt}
			</button>
		</form>
	);
};

const cutTxt = (text: string, limit: number): string => {
	if (text.length > limit - 1) return text.slice(0, limit);
	return text;
};

export default Contact;
