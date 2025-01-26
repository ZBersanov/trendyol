import { SITE_NAME } from '@/constants/seo.constants'

import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<div className={styles.wrapper}>
			<footer className={styles.footer}>
				{SITE_NAME} © {new Date().getFullYear()}
			</footer>
		</div>
	)
}
