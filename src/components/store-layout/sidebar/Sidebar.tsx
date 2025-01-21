import { Logo } from '@/components/main-layout/header/logo/Logo'

import styles from './Sidebar.module.scss'
import { Navigation } from './navigation/Navigation'

export function SideBar() {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<Navigation />
		</div>
	)
}
