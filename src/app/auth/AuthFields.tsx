import { UseFormReturn } from 'react-hook-form'

import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '@/components/ui/form-elements/form'
import { Input } from '@/components/ui/form-elements/input'

import { IAuthForm } from '@/shared/types/auth.interface'

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm, any, undefined>
	isPending: boolean
	isReg?: boolean
}

export default function AuthFields({
	form,
	isPending,
	isReg = false
}: AuthFieldsProps) {
	return (
		<>
			{isReg && (
				<FormField
					control={form.control}
					name='name'
					rules={{
						required: 'Имя обязательно'
					}}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Хьумид'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
		</>
	)
}
