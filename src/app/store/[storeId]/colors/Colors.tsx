'use client'

import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table/DataTable'
import DataTableLoading from '@/components/ui/data-table/DataTableLoading'

import { STORE_URL } from '@/config/url.config'

import { useGetColor } from '@/hooks/queries/colors/useGetColor'

import { IColor } from '@/shared/types/color.interface'

import styles from '../Store.module.scss'

import { columns } from './ColorColumns'
import { formateDate } from '@/lib/date/format-date'

export const Colors = () => {
	const params = useParams<{ storeId: string }>()

	const { colors, isLoading } = useGetColor()

	const formattedColors: IColor[] = colors
		? colors.map(color => ({
				id: color.id,
				createdAt: formateDate(color.createdAt),
				name: color.name,
				value: color.value,
				storeId: color.storeId
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
							title='цвета'
							description='Все цвета вашего магазина'
						/>
						<div className={styles.buttons}>
							<Link href={STORE_URL.colorCreate(params.storeId)}>
								<Button variant={'primary'}>
									<Plus />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className={styles.table}>
						<DataTable
							columns={columns}
							data={formattedColors}
							filterKey='name'
						/>
					</div>
				</>
			)}
		</div>
	)
}
