import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { ILastUsers } from '@/shared/types/statistics.interface'

interface LastUsersProps {
	data: ILastUsers[]
}

export function LastUsers({ data }: LastUsersProps) {
	console.log(data)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Покупатели</CardTitle>
			</CardHeader>
			<CardContent>
				{data.length ? (
					data.map(item => (
						<div className='flex items-center justify-between'>
							<div className='flex'>
								<Image
									src={item.avatar}
									alt={item.name}
									width={45}
									height={45}
									className='rounded-full mr-4'
								/>
								<div className='flex flex-col'>
									<div>{item.name}</div>
									<div>{item.email}</div>
								</div>
							</div>

							<div>+{item.total}</div>
						</div>
					))
				) : (
					<div>Нет покупателей</div>
				)}
			</CardContent>
		</Card>
	)
}
