import { IUser } from './user.interfase'

export interface IAuthForm {
	name: string
	email: string
	password: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}
