import { useEffect, useState } from 'react'
import Sun from './icons/Sun'
import Moon from './icons/Moon'

import styles from './ThemeSwitcher.module.scss'

export default function ThemeSwticher() {
	const [mode, setMode] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

		setMode(isDark ? 'dark' : 'light')
	}, [])

	function handleThemeChange() {
		const root = document.querySelector(':root') as HTMLHtmlElement
		const mode = getComputedStyle(root).getPropertyValue('--mode').trim()

		if (mode === 'light') {
			root.style.setProperty('--mode', 'dark')
			root.style.setProperty('--fg-color', 'white')
			root.style.setProperty('--bg-color', 'black')
			setMode('dark')
		} else if (mode === 'dark') {
			root.style.setProperty('--mode', 'light')
			root.style.setProperty('--fg-color', '#222')
			root.style.setProperty('--bg-color', 'white')
			setMode('light')
		}
	}

	const icon = mode === 'light' ? <Moon /> : <Sun />

	return (
		<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
			<button className={styles.switcher} onClick={handleThemeChange}>
				{icon}
			</button>
		</div>
	)
}
