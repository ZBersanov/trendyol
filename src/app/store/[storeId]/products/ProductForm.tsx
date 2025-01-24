'use client'

import { SelectGroup } from '@radix-ui/react-select'
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
import { ImageUpload } from '@/components/ui/form-elements/image-upload/ImageUpload'
import { Input } from '@/components/ui/form-elements/input'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { useCreateProduct } from '@/hooks/queries/products/useCreateProduct'
import { useDeleteProduct } from '@/hooks/queries/products/useDeleteProduct'
import { useUpdateProduct } from '@/hooks/queries/products/useUpdateProduct'

import { ICategory } from '@/shared/types/category.interface'
import { IColor } from '@/shared/types/color.interface'
import { IProduct, IProductInput } from '@/shared/types/product.interface'

import styles from '../Store.module.scss'

interface ProductFormProps {
	product?: IProduct
	categories: ICategory[]
	colors: IColor[]
}

export function ProductForm({ product, categories, colors }: ProductFormProps) {
	const { createProduct, isCreateLoading } = useCreateProduct()
	const { isUpdateLoading, updateProduct } = useUpdateProduct()
	const { deleteProduct, isDeleteLoading } = useDeleteProduct()

	const title = product ? 'Изменить данные' : 'Создать товар'
	const description = product
		? 'Изменить данные о товаре'
		: 'Добавить новый товар в магазин'

	const action = product ? 'Сохранить' : 'Создать'

	const form = useForm<IProductInput>({
		mode: 'onChange',
		values: {
			title: product?.title || '',
			price: product?.price || 0,
			images: product?.images || [],
			categoryId: product?.category.id || '',
			colorId: product?.color.id || '',
			description: product?.description || ''
		}
	})

	const onSubmit: SubmitHandler<IProductInput> = data => {
		data.price = Number(data.price)
		if (product) updateProduct(data)
		else createProduct(data)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Heading title={title} description={description} />
				{product && (
					<ConfirmModal handleClick={deleteProduct}>
						<Button
							size={'icon'}
							variant={'primary'}
							disabled={isDeleteLoading}
						>
							<Trash className='size-4' />
						</Button>
					</ConfirmModal>
				)}
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='images'
						rules={{
							required: 'Необходимо добавить изображение'
						}}
						render={({ field }) => (
							<FormItem className='mt-4'>
								<FormLabel>Изображение</FormLabel>
								<FormControl>
									<ImageUpload
										isDisabled={
											isCreateLoading || isUpdateLoading
										}
										onChange={field.onChange}
										value={field.value}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className={styles.fields}>
						<FormField
							control={form.control}
							name='title'
							rules={{
								required: 'Название обязательно'
							}}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder='Название продукта'
											disabled={
												isCreateLoading ||
												isUpdateLoading
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
							name='price'
							rules={{
								required: 'Цена обязательна'
							}}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder='Цена продукта'
											disabled={
												isCreateLoading ||
												isUpdateLoading
											}
											// {...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='categoryId'
							rules={{
								required: 'Категория обязательна'
							}}
							render={({ field }) => (
								<FormItem>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
										disabled={
											isCreateLoading || isUpdateLoading
										}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder='Категория товара' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{categories.map(category => (
													<SelectItem
														key={category.id}
														value={category.id}
													>
														{category.title}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
					</div>
					<div className={styles.fields}>
						<FormField
							control={form.control}
							name='colorId'
							rules={{
								required: 'Цвет обязателен'
							}}
							render={({ field }) => (
								<FormItem>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
										disabled={
											isCreateLoading || isUpdateLoading
										}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder='Цвет товара' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{colors.map(color => (
													<SelectItem
														key={color.id}
														value={color.id}
													>
														{color.name}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name='description'
						rules={{
							required: 'Описание обязательно'
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Описание</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Описание магазина (необязательно)'
										disabled={isUpdateLoading}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						variant={'primary'}
						disabled={isCreateLoading || isUpdateLoading}
					>
						{action}
					</Button>
				</form>
			</Form>
		</div>
	)
}
