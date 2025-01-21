import type { PropsWithChildren } from 'react'

import styles from './StoreLayout.module.scss'
import { Header } from './header/Header'
import { SideBar } from './sidebar/Sidebar'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.layout}>
				<div className={styles.sidebar}>
					<SideBar />
				</div>
				<div className={styles.header}>
					<Header />
				</div>
				<main>{children}</main>
			</div>
		</div>
	)
}
