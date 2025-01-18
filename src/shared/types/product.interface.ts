import { IColor } from './color.interface'
import { IReview } from './review.interface'
import { IStore } from './store.interface'

export interface IProduct {
	id: string
	title: string
	description: string
	price: number
	images: string
	category: string
	review: IReview[]
	color: IColor
	store: IStore
}

export interface IProductInput
	extends Omit<IProduct, 'id' | 'review' | 'store' | 'category' | 'color'> {
	categoryId: string
	colorId: string
}
