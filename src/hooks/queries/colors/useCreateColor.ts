import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { colorService } from '@/services/color.service'

import { IColorInput } from '@/shared/types/color.interface'

export function useCreateColor() {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()
	const queryClient = useQueryClient()

	const { mutate: createColor, isPending: isCreateColorLoading } =
		useMutation({
			mutationKey: ['create color'],
			mutationFn: (data: IColorInput) =>
				colorService.create(data, params.storeId),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get colors for store dashboard']
				})
				toast.success('Цвет был создан')
				router.push(STORE_URL.colors(params.storeId))
			},
			onError() {
				toast.error('Произошла ошибка при создании цвета')
			}
		})

	return useMemo(
		() => ({ createColor, isCreateColorLoading }),
		[createColor, isCreateColorLoading]
	)
}
