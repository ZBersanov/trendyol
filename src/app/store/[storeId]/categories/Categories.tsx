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

import { useGetCategory } from '@/hooks/queries/categories/useGetCategory'

import { ICategory } from '@/shared/types/category.interface'

import styles from '../Store.module.scss'

import { columns } from './CategoryColumns'
import { formateDate } from '@/lib/date/format-date'

export const Categories = () => {
	const params = useParams<{ storeId: string }>()

	const { categories, isLoading } = useGetCategory()

	const formattedCategories: ICategory[] = categories
		? categories.map(category => ({
				id: category.id,
				createdAt: formateDate(category.createdAt),
				title: category.title,
				description: category.description,
				storeId: category.storeId
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
							title='Категории'
							description='Все категории вашего магазина'
						/>
						<div className={styles.buttons}>
							<Link
								href={STORE_URL.categoryCreate(params.storeId)}
							>
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
							data={formattedCategories}
							filterKey='title'
						/>
					</div>
				</>
			)}
		</div>
	)
}
