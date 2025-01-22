'use client'

import { PropsWithChildren, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCreateStore } from '@/hooks/queries/stores/useCreateStore'

import { ICreateStore } from '@/shared/types/store.interface'

import { Button } from '../button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../form-elements/form'
import { Input } from '../form-elements/input'

export function CreateStoreModal({ children }: PropsWithChildren) {
	const [isOpen, setIsOpen] = useState(false)

	const { createStore, isPending } = useCreateStore()

	const form = useForm<ICreateStore>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<ICreateStore> = data => {
		createStore(data)
		setIsOpen(false)
	}
	return (
		<Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Создание магазина</DialogTitle>
					<DialogDescription>
						Для создания магазина необходимо указать название
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4'
					>
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
											placeholder='Введите название вашего магазина'
											disabled={isPending}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex justify-end'>
							<Button variant={'primary'} disabled={isPending}>
								Создать
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
