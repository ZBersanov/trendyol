import React, { FC } from 'react'

import { Loader } from '../Loader'
import { Card, CardContent } from '../card'
import { Skeleton } from '../skeleton'

import styles from './DataTable.module.scss'

const DataTableLoading: FC = () => {
	return (
		<div className={styles.loading}>
			<Skeleton className={styles.heading} />
			<Skeleton className={styles.search} />
			<Card className={styles.table}>
				<CardContent>
					<div className={styles.loading_wrapper}>
						<Loader />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default DataTableLoading
