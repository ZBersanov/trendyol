import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { PUBLIC_URL } from '@/config/url.config'

import { SITE_DESCRIPTION } from '@/constants/seo.constants'

import styles from './Hero.module.scss'

export default function Hero() {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>
				<span>Мохьмад</span> болх меттиг кеч елахь
			</h1>
			<p className={styles.descripton}>{SITE_DESCRIPTION}</p>
			<Link href={PUBLIC_URL.explorer()}>
				<Button variant={'primary'}>
					За покупками
					<ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
