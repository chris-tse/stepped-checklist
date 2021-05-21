import Head from 'next/head'
import Link from 'next/link'

import styles from './index.module.scss'

export default function Home() {
	return (
		<>
			<Head>
				<title>Delivery Day Checklist</title>
				<meta name="description" content="A guided checklist for your Tesla delivery day inspection" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Delivery Checklist</h1>
			<p>Congratulations on delivery day! Select your model to begin:</p>

			<div className={styles['model-links']}>
				<Link href="/model3">
					<a>Model 3</a>
				</Link>
				<Link href="">
					<a className={styles.disabled} role="button" aria-disabled="true" tabIndex={-1}>
						Model Y<br />
						<span style={{ fontStyle: 'italic' }}>Coming Soon</span>
					</a>
				</Link>
				<Link href="">
					<a className={styles.disabled} role="button" aria-disabled="true" tabIndex={-1}>
						Model S<br />
						<span style={{ fontStyle: 'italic' }}>Coming Soon</span>
					</a>
				</Link>
				<Link href="">
					<a className={styles.disabled} role="button" aria-disabled="true" tabIndex={-1}>
						Model X<br />
						<span style={{ fontStyle: 'italic' }}>Coming Soon</span>
					</a>
				</Link>
			</div>
		</>
	)
}
