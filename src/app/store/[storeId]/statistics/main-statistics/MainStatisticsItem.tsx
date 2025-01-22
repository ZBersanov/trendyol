import CountUp from 'react-countup'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { IMainStatistics } from '@/shared/types/statistics.interface'

import styles from './MainStatistics.module.scss'
import { getIcon } from './statistics.util'
import { formatPrice } from '@/lib/string/format-price'

interface MainStatisticsItemProps {
	item: IMainStatistics
}

export const MainStatisticsItem = ({ item }: MainStatisticsItemProps) => {
	const Icon = getIcon(item.id)
	return (
		<Card className={styles.card}>
			<CardHeader className={styles.header}>
				<CardTitle>{item.name}</CardTitle>
				<Icon />
			</CardHeader>
			<CardContent className={styles.content}>
				<h2>
					{item.id !== 1 ? (
						<CountUp end={item.value} />
					) : (
						<CountUp end={item.value} formattingFn={formatPrice} />
					)}
				</h2>
			</CardContent>
		</Card>
	)
}
