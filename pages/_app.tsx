import Head from 'next/head'
import Header from '../components/Header'
import ThemeSwitcher from '../components/ThemeSwitcher'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
		</>
	)
}

export default MyApp
