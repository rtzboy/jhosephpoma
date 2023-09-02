'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '../i18n-config';

export default function LangSwitcher() {
	const pathName = usePathname();
	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	return (
		<div>
			<p>Locale switcher:</p>
			<ul className='flex gap-2'>
				{i18n.locales.map(locale => {
					return (
						<li key={locale}>
							<Link href={redirectedPathName(locale)}>{locale}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}