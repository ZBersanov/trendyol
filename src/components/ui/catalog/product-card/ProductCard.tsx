import { IProduct } from '@/shared/types/product.interface'

interface ProductCardProps {
	product: IProduct
}

export default function ProductCard({ product }: ProductCardProps) {
	return <div>{product.title}</div>
}
