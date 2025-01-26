import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import styles from './HeaderCart.module.scss'

export default function HeaderCart() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={'ghost'}>Корзина</Button>
			</SheetTrigger>
			<SheetContent>
				<Heading title='Корзина' className='text-xl' />
			</SheetContent>
		</Sheet>
	)
}
