'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { reviewService } from '@/services/review.service'

import { IReviewInput } from '@/shared/types/review.interface'

export function useCreateReview(storeId: string) {
	const queryClient = useQueryClient()

	const params = useParams<{ id: string }>()

	const { mutate: createReview, isPending: isReviewCreateLoading } =
		useMutation({
			mutationKey: ['create review'],
			mutationFn: (data: IReviewInput) =>
				reviewService.create(data, params.id, storeId),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['product']
				})
			},
			onError() {
				toast.error('ошибка при создании отзыва')
			}
		})

	return useMemo(
		() => ({ createReview, isReviewCreateLoading }),
		[createReview, isReviewCreateLoading]
	)
}
