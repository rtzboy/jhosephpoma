import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Locale, i18n } from '../../i18n-config';
import './globals.css';

const roboto = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'JhosephPDev',
	description: 'Generated by create next app'
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
			<body className={`${roboto.className}`}>
				<Header lang={params.lang} />
				{children}
			</body>
		</html>
	);
}
