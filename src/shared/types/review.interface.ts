import { IUser } from './user.interfase'

export interface IReview {
	id: string
	createdAt: string
	text: string
	rating: number
	user: IUser
}

export interface IReviewInput extends Pick<IReview, 'text' | 'rating'> {}
