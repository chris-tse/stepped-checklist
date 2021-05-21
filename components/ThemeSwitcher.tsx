import { useState } from 'react'
import Sun from './icons/Sun'
import Moon from './icons/Moon'

import styles from './ThemeSwitcher.module.scss'

export default function ThemeSwticher() {
	const [Icon, setIcon] = useState(() => {
		if (typeof window !== 'undefined') {
			const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			return isDark ? Sun : Moon
		}
	})

	function handleThemeChange() {
		const root = document.querySelector(':root') as HTMLHtmlElement
		const mode = getComputedStyle(root).getPropertyValue('--mode').trim()

		if (mode === 'light') {
			root.style.setProperty('--mode', 'dark')
			root.style.setProperty('--fg-color', 'white')
			root.style.setProperty('--bg-color', 'black')
			setIcon(() => Sun)
		} else if (mode === 'dark') {
			root.style.setProperty('--mode', 'light')
			root.style.setProperty('--fg-color', '#222')
			root.style.setProperty('--bg-color', 'white')
			setIcon(() => Moon)
		}
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
			<button className={styles.switcher} onClick={handleThemeChange}>
				<Icon />
			</button>
		</div>
	)
}
