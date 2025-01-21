'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { storeService } from '@/services/store.service'

import { ICreateStore } from '@/shared/types/store.interface'

export function useCreateStore() {
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: createStore, isPending } = useMutation({
		mutationKey: ['create store'],
		mutationFn: (data: ICreateStore) => storeService.create(data),
		onSuccess(store) {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.success('Магазин успешно создан')
			router.push(STORE_URL.home(store.id))
		},
		onError() {
			toast.error('Ошибка при создании магазина')
		}
	})

	return useMemo(() => ({ createStore, isPending }), [createStore, isPending])
}
