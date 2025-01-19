import { CreateAxiosDefaults } from 'axios'

import { SERVER_URL } from '@/config/api.config'

import { getContentType } from './api.helpler'

export const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: getContentType(),
	withCredentials: true
}
