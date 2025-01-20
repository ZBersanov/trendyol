'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Form } from '@/components/ui/form-elements/form'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { Social } from './Socials'
import { useAuth } from './useAuth'

const Auth = () => {
	const [isReg, setIsReg] = useState(false)

	const { form, isPending, onSubmit } = useAuth(isReg)
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Image
					src={'/images/trendyol-auth.svg'}
					alt='trendyol auth'
					width={100}
					height={100}
					className={styles.authLogo}
				/>
			</div>
			<div className={styles.right}>
				<Card className={styles.card}>
					<CardHeader className={styles.header}>
						<CardTitle>{isReg ? 'Регистрация' : 'Вход'}</CardTitle>
						<CardDescription>
							Войдите или создайте учетную запись чтобы оформлять
							покупки!
						</CardDescription>
					</CardHeader>
					<CardContent className={styles.content}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields
									form={form}
									isPending={isPending}
									isReg={isReg}
								/>
								<Button disabled={isPending}>Продолжить</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className={styles.footer}>
						{isReg ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
						<button onClick={() => setIsReg(!isReg)}>
							{isReg ? 'Войти' : 'Регистрация'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}

export default Auth
