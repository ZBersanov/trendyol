import { IOrder } from './order.interface'
import { IProduct } from './product.interface'
import { IStore } from './store.interface'

export interface IUser {
	id: string
	name: string
	email: string
	avatar: string
	favorites: IProduct[]
	orders: IOrder[]
	stores: IStore[]
}
