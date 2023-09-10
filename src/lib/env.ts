import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
	EMAILJS_KEY: str(),
	EMAILJS_SERVICE_KEY: str(),
	EMAILJS_TEMPLATE_KEY: str()
});

export default env;
