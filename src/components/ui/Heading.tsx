import { FC } from 'react'

import { cn } from '@/lib/utils'

interface IHeading {
	title: string
	description?: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, description, className }) => {
	return (
		<div className='space-y-1'>
			<h2 className={cn('text-2xl font-medium', className)}>{title}</h2>
			{description && (
				<p className='text-sm text-muted-foreground'>{description}</p>
			)}
		</div>
	)
}

export default Heading
