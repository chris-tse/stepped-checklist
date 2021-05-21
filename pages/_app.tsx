import Head from 'next/head'
import Header from '../components/Header'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Delivery Day Checklist</title>
				<meta name="description" content="A guided checklist for your Tesla delivery day inspection" />
				<link rel="icon" href="/favicon.ico" />
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
