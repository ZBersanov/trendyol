import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { PUBLIC_URL } from '@/config/url.config'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import styles from '../hero/Hero.module.scss'

export const metadata: Metadata = {
	title: 'Спасибо за покупку',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>Спасибо за покупку!</h1>
			<p className={styles.description}>Спасибо за то что купил короче</p>
			<Link href={PUBLIC_URL.home()}>
				<Button variant={'primary'}>
					На главную
					<ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
