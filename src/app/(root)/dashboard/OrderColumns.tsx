'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'

export interface IOrderColumn {
	createdAt: string
	status: string
	total: string
}

export const columns: ColumnDef<IOrderColumn>[] = [
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<Button
				variant={'ghost'}
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Дата оплаты
				<ArrowUpDown className='ml-2 w-4 h-4' />
			</Button>
		)
	},
	{
		accessorKey: 'status',
		header: ({ column }) => (
			<Button
				variant={'ghost'}
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Статус
				<ArrowUpDown className='ml-2 w-4 h-4' />
			</Button>
		)
	},
	{
		accessorKey: 'total',
		header: ({ column }) => (
			<Button
				variant={'ghost'}
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Сумма
				<ArrowUpDown className='ml-2 w-4 h-4' />
			</Button>
		)
	}
]
