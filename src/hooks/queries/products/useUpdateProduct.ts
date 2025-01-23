'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { productService } from '@/services/product.service'

import { IProductInput } from '@/shared/types/product.interface'

export function useUpdateProduct() {
	const params = useParams<{ storeId: string }>()
	const queryClient = useQueryClient()

	const { mutate: updateProduct, isPending: isUpdateLoading } = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: IProductInput) =>
			productService.update(data, params.storeId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard']
			})
			toast.success('Товар обновлен')
		},
		onError() {
			toast.error('Ошибка при обновлении товара')
		}
	})
	return useMemo(
		() => ({ updateProduct, isUpdateLoading }),
		[updateProduct, isUpdateLoading]
	)
}
