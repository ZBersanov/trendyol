import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { colorService } from '@/services/color.service'

import { IColorInput } from '@/shared/types/color.interface'

export function useUpdateColor() {
	const params = useParams<{ storeId: string; colorId: string }>()
	const router = useRouter()
	const queryClient = useQueryClient()

	const { mutate: updateColor, isPending: isUpdateColorLoading } =
		useMutation({
			mutationKey: ['update color'],
			mutationFn: (data: IColorInput) =>
				colorService.update(params.colorId, data),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get colors for store dashboard']
				})
				toast.success('Цвет был обновлен')
				router.push(STORE_URL.colors(params.storeId))
			},
			onError() {
				toast.error('Произошла ошибка при обновлении цвета')
			}
		})

	return useMemo(
		() => ({ updateColor, isUpdateColorLoading }),
		[updateColor, isUpdateColorLoading]
	)
}
