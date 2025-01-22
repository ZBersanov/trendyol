import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { statisticsService } from '@/services/statistics.serice'

export const useGetStatistics = () => {
	const params = useParams<{ storeId: string }>()

	const { data: main } = useQuery({
		queryKey: ['get main statistics'],
		queryFn: () => statisticsService.getMainStatistics(params.storeId)
	})

	const { data: middle } = useQuery({
		queryKey: ['get middle statistics'],
		queryFn: () => statisticsService.getMiddleStatistics(params.storeId)
	})

	return useMemo(() => ({ main, middle }), [main, middle])
}
