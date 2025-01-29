import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { reviewService } from '@/services/review.service'

export function useDeleteReview() {
	const queryClient = useQueryClient()

	const { mutate: deleteReview, isPending: isReviewDeleteLoading } =
		useMutation({
			mutationKey: ['delete review'],
			mutationFn: (reviewId: string) => reviewService.delete(reviewId),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['product']
				})
				toast.success('Отзыв удален')
			},
			onError() {
				toast.error('Ошибка при удалении отзыва')
			}
		})

	return useMemo(
		() => ({ deleteReview, isReviewDeleteLoading }),
		[deleteReview, isReviewDeleteLoading]
	)
}
