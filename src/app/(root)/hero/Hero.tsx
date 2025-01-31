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
				Добро пожаловать в <span>Trendyol</span>
			</h1>
			<p className={styles.description}>{SITE_DESCRIPTION}</p>
			<Link href={PUBLIC_URL.explorer()}>
				<Button
					variant={'primary'}
					className='animate-pulse hover:animate-none'
				>
					За покупками
					<ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
