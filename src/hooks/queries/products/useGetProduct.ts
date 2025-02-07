'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { productService } from '@/services/product.service'

import { IProduct } from '@/shared/types/product.interface'

export function useGetProduct() {
	const params = useParams<{ storeId: string }>()

	const { data: products, isLoading } = useQuery<IProduct[]>({
		queryKey: ['get products for store dashboard'],
		queryFn: () => productService.getByStoreId(params.storeId)
	})
	return useMemo(() => ({ products, isLoading }), [products, isLoading])
}
