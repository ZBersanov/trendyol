import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { colorService } from '@/services/color.service'

import { IColor } from '@/shared/types/color.interface'

export function useGetColor() {
	const params = useParams<{ storeId: string }>()
	const { data: colors, isLoading } = useQuery<IColor[]>({
		queryKey: ['get colors for store dashboard'],
		queryFn: () => colorService.getByStoreId(params.storeId)
	})

	return useMemo(() => ({ colors, isLoading }), [colors, isLoading])
}
