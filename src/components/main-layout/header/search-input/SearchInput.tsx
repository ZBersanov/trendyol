'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/form-elements/input'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './SearchInput.module.scss'

export default function SearchInput() {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const router = useRouter()
	return (
		<div className={styles.form}>
			<Input
				placeholder='Искать'
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
			/>
			<Button
				variant={'primary'}
				onClick={() =>
					router.push(
						PUBLIC_URL.explorer(`?searchTerm=${searchTerm}`)
					)
				}
			>
				<Search />
			</Button>
		</div>
	)
}
