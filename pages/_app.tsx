import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<AnimatePresence>
		<Component {...pageProps} />
	</AnimatePresence>
);

export default MyApp;
