import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { productService } from '@/services/product.service'

import { Explorer } from './Explorer'

export const metadata: Metadata = {
	title: 'Каталог товаров',
	...NO_INDEX_PAGE
}

async function getProducts() {
	return await productService.getAll()
}

export default async function ExplorerPage() {
	const data = await getProducts()
	return <Explorer products={data} />
}
