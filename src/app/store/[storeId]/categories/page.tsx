import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Categories } from './Categories'

export const metadata: Metadata = {
	title: 'Категории',
	description: 'Страница категорий',
	...NO_INDEX_PAGE
}

export default function CategoriesPage() {
	return <Categories />
}
