'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { useGetCategory } from '@/hooks/queries/categories/useGetCategory'
import { useGetColor } from '@/hooks/queries/colors/useGetColor'

import { productService } from '@/services/product.service'

import { ProductForm } from '../ProductForm'

export function ProductEdit() {
	const params = useParams<{ productId: string }>()
	const { data } = useQuery({
		queryKey: ['get product'],
		queryFn: () => productService.getById(params.productId)
	})

	const { categories } = useGetCategory()
	const { colors } = useGetColor()

	return (
		<ProductForm
			product={data}
			categories={categories || []}
			colors={colors || []}
		/>
	)
}
