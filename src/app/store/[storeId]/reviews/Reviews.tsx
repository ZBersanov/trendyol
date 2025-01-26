'use client'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table/DataTable'
import DataTableLoading from '@/components/ui/data-table/DataTableLoading'

import { useGetReview } from '@/hooks/queries/reviews/useGetReview'

import { IReview } from '@/shared/types/review.interface'

import styles from '../Store.module.scss'

import { IReviewColumn, columns } from './ReviewColumns'
import { formateDate } from '@/lib/date/format-date'

export default function Reviews() {
	const { reviews, isLoading } = useGetReview()

	const formattedReviews: IReviewColumn[] = reviews
		? reviews.map(review => ({
				id: review.id || '',
				createdAt: formateDate(review.createdAt) || '',
				rating:
					Array.from({ length: review.rating })
						.map(() => '★')
						.join(' ') || '',
				username: review.user.name || ''
			}))
		: []

	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className={styles.header}>
						<Heading
							title={`Отзывы(${reviews && reviews.length})`}
							description='Все отзывы вашего магазина'
						/>
					</div>
					<div className={styles.table}>
						<DataTable
							columns={columns}
							data={formattedReviews}
							filterKey='username'
						/>
					</div>
				</>
			)}
		</div>
	)
}
