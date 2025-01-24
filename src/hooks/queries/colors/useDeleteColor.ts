import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { colorService } from '@/services/color.service'

export function useDeleteColor() {
	const params = useParams<{ storeId: string; colorId: string }>()
	const queryClient = useQueryClient()
	const router = useRouter()

	const { mutate: deleteColor, isPending: isColorDeleteLoading } =
		useMutation({
			mutationKey: ['delete color'],
			mutationFn: () => colorService.delete(params.colorId),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get colors for store dashboard']
				}),
					toast.success('Цвет был удален')
				router.push(STORE_URL.colors(params.storeId))
			},
			onError() {
				toast.error('Произошла ошибка при удалении цвета')
			}
		})

	return useMemo(
		() => ({ deleteColor, isColorDeleteLoading }),
		[deleteColor, isColorDeleteLoading]
	)
}
