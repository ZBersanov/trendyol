'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table/DataTable'

import { useProfile } from '@/hooks/useProfile'

import { saveTokenStorage } from '@/services/auth/auth-token.service'
import { authService } from '@/services/auth/auth.service'

import { EnumOrderStatus } from '@/shared/types/order.interface'

import styles from './Dashboard.module.scss'
import { IOrderColumn, columns } from './OrderColumns'
import { formateDate } from '@/lib/date/format-date'
import { formatPrice } from '@/lib/string/format-price'

export default function Dashboard() {
	const { user } = useProfile()
	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) {
			saveTokenStorage(accessToken)
		}
	}, [searchParams])

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	if (!user) return null

	const formattedOrders: IOrderColumn[] = user.orders.map(order => ({
		createdAt: formateDate(order.createdAt),
		status:
			order.status === EnumOrderStatus.PENDING ? 'В ожидании' : 'Оплачен',
		total: formatPrice(order.total)
	}))

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1>Ваши заказы</h1>
				<Button variant={'ghost'} onClick={() => logout()}>
					<LogOut />
					Выйти
				</Button>
			</div>
			<DataTable columns={columns} data={formattedOrders} />
		</div>
	)
}
