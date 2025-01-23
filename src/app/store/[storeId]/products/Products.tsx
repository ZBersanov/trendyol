'use client'

import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-loading/DataTable'
import DataTableLoading from '@/components/ui/data-loading/DataTableLoading'

import { STORE_URL } from '@/config/url.config'

import { useGetProduct } from '@/hooks/queries/products/useGetProduct'

import styles from '../Store.module.scss'

import { IProductColumn, columns } from './ProductColumns'
import { formatPrice } from '@/lib/string/format-price'

export const Products = () => {
	const params = useParams<{ storeId: string }>()

	const { products, isLoading } = useGetProduct()

	const formattedProducts: IProductColumn[] = products
		? products.map(product => ({
				id: product.id,
				title: product.title,
				price: formatPrice(product.price),
				category: product.category.title,
				color: product.color.value,
				storeId: product.storeId
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
							title='товары'
							description='Все товары вашего магазина'
						/>
						<div className={styles.buttons}>
							<Link
								href={STORE_URL.productsCreate(params.storeId)}
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
							data={formattedProducts}
							filterKey='title'
						/>
					</div>
				</>
			)}
		</div>
	)
}
