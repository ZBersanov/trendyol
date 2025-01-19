import { axiosClassic } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import {
	ICreateStore,
	IEditStore,
	IStore
} from '@/shared/types/store.interface'

class StoreService {
	async getById(id: string) {
		const { data } = await axiosClassic<IStore>({
			url: API_URL.stores(`/by-id/${id}`),
			method: 'GET'
		})
		return data
	}

	async create(data: ICreateStore) {
		const { data: createdStore } = await axiosClassic<IStore>({
			url: API_URL.stores(``),
			method: 'POST',
			data
		})
		return createdStore
	}

	async update(id: string, data: IEditStore) {
		const { data: updatedStore } = await axiosClassic<IStore>({
			url: API_URL.stores(`/${id}`),
			method: 'PUT',
			data
		})
		return updatedStore
	}

	async delete(id: string) {
		const { data: deletedStore } = await axiosClassic<IStore>({
			url: API_URL.stores(`/${id}`),
			method: 'DELETE'
		})
		return deletedStore
	}
}

export const categoryService = new StoreService()