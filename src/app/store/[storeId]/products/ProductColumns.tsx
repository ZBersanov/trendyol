import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { PUBLIC_URL, STORE_URL } from '@/config/url.config'

import { IColorInput } from '@/shared/types/color.interface'

export interface IProductColumn {
	id: string
	title: string
	price: string
	category: string
	color: IColorInput
	storeId: string
}

export const columns: ColumnDef<IProductColumn>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting()}
				>
					Название
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'price',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting()}
				>
					Цена
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'category',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting()}
				>
					категория
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'color',
		header: ({ column }) => {
			return (
				<Button
					variant={'ghost'}
					onClick={() => column.toggleSorting()}
				>
					Цвет
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='flex items-center gap-x-3'>
				{row.original.color.name}
				<div
					className='size-5 rounded-full border'
					style={{
						backgroundColor: row.original.color.value
					}}
				/>
			</div>
		)
	},
	{
		accessorKey: 'actions',
		header: 'Действия',
		cell: ({ row }) => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='size-8 p-0'>
						<MoreHorizontal className='size-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Действия</DropdownMenuLabel>
					<Link
						href={PUBLIC_URL.product(row.original.id)}
						target='_blank'
					>
						<DropdownMenuItem>
							<ExternalLink className='size-4 mr-2' />
							Страница с продуктом
						</DropdownMenuItem>
					</Link>
					<Link
						href={STORE_URL.productsEdit(
							row.original.storeId,
							row.original.id
						)}
						target='_blank'
					>
						<DropdownMenuItem>
							<Pencil className='size-4 mr-2' />
							Изменить
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	}
]
