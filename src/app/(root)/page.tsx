import { Metadata } from 'next'

import Home from './Home'

export const metadata: Metadata = {
	title: 'Шопинг с кайфом'
}

export default function HomePage() {
	return <Home />
}
