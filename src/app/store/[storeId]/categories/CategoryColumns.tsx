import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { STORE_URL } from '@/config/url.config'

interface ICategoryColumn {
	id: string
	title: string
	storeId: string
	createdAt: string
}

export const columns: ColumnDef<ICategoryColumn>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => (
			<Button
				variant={'ghost'}
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Название
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		)
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<Button
				variant={'ghost'}
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Дата создания
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		)
	},
	{
		accessorKey: 'actions',
		header: 'Действия',
		cell: ({ row }) => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={'ghost'} className='h-8 w-8 p-0'>
						<MoreHorizontal className='h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Действия</DropdownMenuLabel>
					<Link
						href={STORE_URL.categoryEdit(
							row.original.storeId,
							row.original.id
						)}
					>
						<DropdownMenuItem>
							<Pencil className='size-4 mr-2' />
							Редактировать
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	}
]
