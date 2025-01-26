import { IProduct } from '@/shared/types/product.interface'

import Hero from './hero/Hero'

interface HomeProps {
	products: IProduct[]
}

const Home = ({ products }: HomeProps) => {
	return <Hero />
}

export default Home
