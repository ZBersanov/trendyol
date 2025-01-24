import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { categoryService } from '@/services/category.service'

export function useDeleteCategory() {
	const params = useParams<{ storeId: string; categoryId: string }>()
	const queryClient = useQueryClient()
	const router = useRouter()

	const { mutate: deleteCategory, isPending: isCategoryDeleteLoading } =
		useMutation({
			mutationKey: ['delete category'],
			mutationFn: () => categoryService.delete(params.categoryId),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get categories for store dashboard']
				}),
					toast.success('Каткгория была удалена')
				router.push(STORE_URL.categories(params.storeId))
			},
			onError() {
				toast.error('Произошла ошибка при удалении категории')
			}
		})

	return useMemo(
		() => ({ deleteCategory, isCategoryDeleteLoading }),
		[deleteCategory, isCategoryDeleteLoading]
	)
}
