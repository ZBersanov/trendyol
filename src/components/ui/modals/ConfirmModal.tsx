import { PropsWithChildren } from 'react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '../alert-dialog'

interface ConfirmModalProps {
	handleClick: () => void
}

export function ConfirmModal({
	children,
	handleClick
}: PropsWithChildren<ConfirmModalProps>) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent className='bg-[#09090B] text-white border-[#27272A]'>
				<AlertDialogHeader>
					<AlertDialogTitle>Вы уверены?</AlertDialogTitle>
					<AlertDialogDescription>
						Это действие нельзя будет отменить
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className='bg-red-500 text-white hover:bg-red-500/90 hover:text-white/90 border-none'>
						Закрыть
					</AlertDialogCancel>
					<AlertDialogAction
						className='text-white bg-blue-500 hover:bg-blue-500/90'
						onClick={handleClick}
					>
						Продолжить
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
