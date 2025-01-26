import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'

export interface IReviewColumn {
	id: string
	createdAt: string
	rating: string
	username: string
}

export const columns: ColumnDef<IReviewColumn>[] = [
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<Button
				variant={'ghost'}
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Дата отзыва
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		)
	},
	{
		accessorKey: 'rating',
		header: ({ column }) => (
			<Button
				variant={'ghost'}
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Рейтинг
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		)
	},
	{
		accessorKey: 'username',
		header: ({ column }) => (
			<Button
				variant={'ghost'}
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Пользователь
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		)
	}
]
