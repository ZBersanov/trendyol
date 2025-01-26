import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import CategoryEdit from './CategoryEdit'

export const metadata = {
	title: 'Редактировать категорию',
	description: 'Страница редактирования категории',
	...NO_INDEX_PAGE
}

export default function CategoryEditPage() {
	return <CategoryEdit />
}
