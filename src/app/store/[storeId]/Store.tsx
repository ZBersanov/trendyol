import Heading from '@/components/ui/Heading'

import styles from './Store.module.scss'

export function Store() {
	return (
		<div className={styles.wrapper}>
			<Heading title='Статистика' />
		</div>
	)
}
