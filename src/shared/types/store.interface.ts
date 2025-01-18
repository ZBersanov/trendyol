export interface IStore {
	id: string
	title: string
	description: string
}

export interface ICreateStore extends Pick<IStore, 'title'> {}

export interface IEditStore extends Omit<IStore, 'id'> {}
