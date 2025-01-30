'use client'

import { useRouter } from 'next/navigation'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { PUBLIC_URL } from '@/config/url.config'

import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'

import styles from './HeaderCart.module.scss'
import { CartItem } from './cart-item/CartItem'
import { useCheckout } from './cart-item/useCheckout'
import { formatPrice } from '@/lib/string/format-price'

export default function HeaderCart() {
	const router = useRouter()
	const { items, total } = useCart()

	const { createPayment, isCreatePaymentLoading } = useCheckout()
	const { user } = useProfile()

	const handleClick = () => {
		user ? createPayment() : router.push(PUBLIC_URL.auth())
	}
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={'ghost'}>Корзина</Button>
			</SheetTrigger>
			<SheetContent className={styles.cart}>
				<Heading title='Корзина' className='text-xl text-white' />
				<div className={styles.items}>
					{items.length ? (
						items.map(item => (
							<CartItem item={item} key={item.id} />
						))
					) : (
						<div className={styles.not_found}>
							Ваша корзина пуста :(
						</div>
					)}
				</div>
				{items.length ? (
					<>
						<div className={styles.total}>
							Итого к оплате: {formatPrice(total)}
						</div>
						<Button
							variant={'primary'}
							onClick={handleClick}
							disabled={isCreatePaymentLoading}
							className='w-full'
						>
							Перейти к оплате
						</Button>
					</>
				) : null}
			</SheetContent>
		</Sheet>
	)
}
