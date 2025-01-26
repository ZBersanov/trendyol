'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { reviewService } from '@/services/review.service'

import { IReview } from '@/shared/types/review.interface'

export function useGetReview() {
	const params = useParams<{ storeId: string }>()

	const { data: reviews, isLoading } = useQuery<IReview[]>({
		queryKey: ['get reviews for store dashboard'],
		queryFn: () => reviewService.getByStoreId(params.storeId)
	})

	return useMemo(() => ({ reviews, isLoading }), [reviews, isLoading])
}
