import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart'

import { IMonthlySales } from '@/shared/types/statistics.interface'

import { formatPrice } from '@/lib/string/format-price'

interface OverviewProps {
	data: IMonthlySales[]
}

const chartConfig = {
	value: {
		label: 'Прибыль',
		color: '#E21D48'
	}
} satisfies ChartConfig

export function Overview({ data }: OverviewProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Прибыль</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className='h-[310px] w-full aspect-auto'
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey={'date'}
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									labelFormatter={formatPrice}
									indicator='dot'
								/>
							}
						/>
						<Area
							dataKey='value'
							type='natural'
							fill='var(--color-value)'
							fillOpacity={0.4}
							stroke='var(--color-value)'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
