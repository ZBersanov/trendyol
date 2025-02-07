'use client'

import { useMutation } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { PUBLIC_URL } from '@/config/url.config'

import { storeService } from '@/services/store.service'

export function useDeleteStore() {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()

	const { mutate: deleteStore, isPending: isDeleteLoading } = useMutation({
		mutationKey: ['delete store'],
		mutationFn: () => storeService.delete(params.storeId),
		onSuccess() {
			toast.success('Магазин успешно удален')
			router.push(PUBLIC_URL.home())
		},
		onError() {
			toast.error('Ошибка при удалении магазина')
		}
	})
	return useMemo(
		() => ({ deleteStore, isDeleteLoading }),
		[deleteStore, isDeleteLoading]
	)
}
