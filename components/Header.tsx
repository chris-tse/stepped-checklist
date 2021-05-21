import ThemeSwticher from './ThemeSwitcher'

import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.layout}>
				<p>Delivery Checklist</p>
				<ThemeSwticher />
			</div>
		</header>
	)
}
