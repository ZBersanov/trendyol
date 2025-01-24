'use client'

import { ImagePlus } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../../button'
import { Input } from '../input'

import styles from './ImageUpload.module.scss'
import { useUpload } from './useUpload'
import { cn } from '@/lib/utils'

interface ImageUploadProps {
	isDisabled: boolean
	onChange: (value: string[]) => void
	value: string[]
}

export function ImageUpload({ isDisabled, onChange, value }: ImageUploadProps) {
	const {
		uploadFiles,
		isUploading,
		fileInputRef,
		handleFileChange,
		handleButtonClick
	} = useUpload(onChange)

	return (
		<div>
			<div className={styles.image_container}>
				{value.map((url, index) => (
					<div key={index} className={styles.image_wrapper}>
						<Image src={url} alt='img' fill />
					</div>
				))}
			</div>
			<Button
				type='button'
				disabled={isDisabled || isUploading}
				variant={'secondary'}
				onClick={handleButtonClick}
				className={cn(styles.upload, {
					'mt-4': value.length
				})}
			>
				<ImagePlus />
				Загрузить изображение
			</Button>
			<Input
				type='file'
				ref={fileInputRef}
				onChange={handleFileChange}
				multiple
				className='hidden'
			/>
		</div>
	)
}
