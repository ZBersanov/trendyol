import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import { SITE_NAME } from '@/constants/seo.constants'

import styles from './Logo.module.scss'

export function Logo() {
	return (
		<Link href={PUBLIC_URL.home()} className={styles.logo}>
			<Image
				src={'/images/trendyol-logo.png'}
				width={35}
				height={35}
				alt={SITE_NAME}
			/>
			<div>{SITE_NAME}</div>
		</Link>
	)
}
