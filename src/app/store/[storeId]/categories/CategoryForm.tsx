'use client'

import { Trash } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form-elements/form'
import { Input } from '@/components/ui/form-elements/input'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'

import { useCreateCategory } from '@/hooks/queries/categories/useCreateCategory'
import { useDeleteCategory } from '@/hooks/queries/categories/useDeleteCategory'
import { useUpdateCategory } from '@/hooks/queries/categories/useUpdateCategory'

import { ICategoryInput } from '@/shared/types/category.interface'

import styles from '../Store.module.scss'

interface CategoryFormProps {
	category?: ICategoryInput
}

export function CategoryForm({ category }: CategoryFormProps) {
	const { updateCategory, isUpdateCategoryLoading } = useUpdateCategory()
	const { createCategory, isCreateCategoryLoading } = useCreateCategory()
	const { deleteCategory, isCategoryDeleteLoading } = useDeleteCategory()

	const title = category ? 'Изменить данные' : 'Создать категорию'
	const description = category
		? 'Изменить данные о категории'
		: 'Добавить новую категорию в магазин'

	const action = category ? 'Сохранить' : 'Создать'

	const form = useForm<ICategoryInput>({
		mode: 'onChange',
		values: category || {
			title: '',
			description: ''
		}
	})

	const onSubmit: SubmitHandler<ICategoryInput> = data => {
		if (category) updateCategory(data)
		else createCategory(data)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Heading title={title} description={description} />
				{category && (
					<ConfirmModal handleClick={deleteCategory}>
						<Button
							size={'icon'}
							variant={'primary'}
							disabled={isCategoryDeleteLoading}
						>
							<Trash className='size-4' />
						</Button>
					</ConfirmModal>
				)}
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className={styles.fields}>
						<FormField
							control={form.control}
							name='title'
							rules={{
								required: 'Название обязательно'
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder='Название категории'
											disabled={
												isCreateCategoryLoading ||
												isUpdateCategoryLoading
											}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Описание</FormLabel>
									<FormControl>
										<Input
											placeholder='Описание категории (необязательно)'
											disabled={
												isCreateCategoryLoading ||
												isUpdateCategoryLoading
											}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button
						variant={'primary'}
						disabled={
							isCreateCategoryLoading || isUpdateCategoryLoading
						}
					>
						{action}
					</Button>
				</form>
			</Form>
		</div>
	)
}
