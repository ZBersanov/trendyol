import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { categoryService } from '@/services/category.service'

import { ICategoryInput } from '@/shared/types/category.interface'

export function useUpdateCategory() {
	const params = useParams<{ storeId: string; categoryId: string }>()
	const router = useRouter()
	const queryClient = useQueryClient()

	const { mutate: updateCategory, isPending: isUpdateCategoryLoading } =
		useMutation({
			mutationKey: ['update category'],
			mutationFn: (data: ICategoryInput) =>
				categoryService.update(params.categoryId, data),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get categories for store dashboard']
				})
				toast.success('Категория была обновлена')
				router.push(STORE_URL.categories(params.storeId))
			},
			onError() {
				toast.error('Произошла ошибка при обновлении цвета')
			}
		})

	return useMemo(
		() => ({ updateCategory, isUpdateCategoryLoading }),
		[updateCategory, isUpdateCategoryLoading]
	)
}
