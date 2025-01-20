import { NextRequest, NextResponse } from 'next/server'

import { PUBLIC_URL } from './config/url.config'
import { EnumTokens } from './services/auth/auth-token.service'

export async function middleware(req: NextRequest) {
	const refreshToken = req.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = req.url.includes(PUBLIC_URL.auth())

	if (isAuthPage) {
		if (refreshToken) {
			return NextResponse.redirect(new URL(PUBLIC_URL.home(), req.url))
		}
		return NextResponse.next()
	}
	if (refreshToken === undefined) {
		return NextResponse.redirect(new URL(PUBLIC_URL.auth(), req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*', '/store/:path*', '/auth']
}
