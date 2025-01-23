'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { productService } from '@/services/product.service'

export function useDeleteProduct() {
	const params = useParams<{ storeId: string; productId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: deleteProduct, isPending: isDeleteLoading } = useMutation({
		mutationKey: ['delete product from store dashboard'],
		mutationFn: () => productService.delete(params.productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard']
			}),
				toast.success('товар удален')
			router.push(STORE_URL.products(params.storeId))
		},
		onError() {
			toast.error('Ошибка при удалении товара')
		}
	})

	return useMemo(
		() => ({ deleteProduct, isDeleteLoading }),
		[deleteProduct, isDeleteLoading]
	)
}
