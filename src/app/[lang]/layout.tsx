import Header from '@/components/Header';
import MouseCircle from '@/components/MouseCircle';
import Footer from '@/components/home/Footer';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Locale, i18n } from '../../i18n-config';
import './globals.css';

const roboto = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jhoseph Poma',
	description: 'Jhoseph Poma FullStack Developer'
};

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }));
}

type RootLayoutT = {
	children: React.ReactNode;
	params: { lang: Locale };
};

export default function RootLayout({ children, params }: RootLayoutT) {
	return (
		<html lang={params.lang}>
			<body className={`${roboto.className} bg-[#121212] text-white`}>
				<MouseCircle />
				<Header lang={params.lang} />
				{children}
				<Footer lang={params.lang} />
			</body>
		</html>
	);
}
