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
	FormMessage
} from '@/components/ui/form-elements/form'
import { Input } from '@/components/ui/form-elements/input'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'

import { useCreateColor } from '@/hooks/queries/colors/useCreateColor'
import { useDeleteColor } from '@/hooks/queries/colors/useDeleteColor'
import { useUpdateColor } from '@/hooks/queries/colors/useUpdateColor'

import { IColorInput } from '@/shared/types/color.interface'

import styles from '../Store.module.scss'

interface ColorFormProps {
	color?: IColorInput
}

export function ColorForm({ color }: ColorFormProps) {
	const { updateColor, isUpdateColorLoading } = useUpdateColor()
	const { createColor, isCreateColorLoading } = useCreateColor()
	const { deleteColor, isColorDeleteLoading } = useDeleteColor()

	const title = color ? 'Изменить данные' : 'Создать цвет'
	const description = color
		? 'Изменить данные о цвете'
		: 'Добавить новый цвет в магазин'

	const action = color ? 'Сохранить' : 'Создать'

	const form = useForm<IColorInput>({
		mode: 'onChange',
		values: {
			name: color?.name || '',
			value: color?.value || ''
		}
	})

	const onSubmit: SubmitHandler<IColorInput> = data => {
		if (color) updateColor(data)
		else createColor(data)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Heading title={title} description={description} />
				{color && (
					<ConfirmModal handleClick={deleteColor}>
						<Button
							size={'icon'}
							variant={'primary'}
							disabled={isColorDeleteLoading}
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
							name='name'
							rules={{
								required: 'Название обязательно'
							}}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder='Название цвета'
											disabled={
												isCreateColorLoading ||
												isUpdateColorLoading
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
							name='value'
							rules={{
								required: 'Значение обязательно'
							}}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder='Значение цвета'
											disabled={
												isCreateColorLoading ||
												isUpdateColorLoading
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
						disabled={isCreateColorLoading || isUpdateColorLoading}
					>
						{action}
					</Button>
				</form>
			</Form>
		</div>
	)
}
