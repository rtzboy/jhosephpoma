import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import NavBar from './NavBar';

type HeaderT = { lang: Locale };

const Header = async ({ lang }: HeaderT) => {
	const { navigation } = await getDictionary(lang);

	return (
		<header>
			<NavBar links={navigation} lang={lang} />
		</header>
	);
};

export default Header;
