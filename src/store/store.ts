import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { cartSlice } from './cart/cartSlice'

const persisConfig = {
	key: 'trendyol',
	storage,
	whitelist: ['cart']
}

const isCLient = typeof window !== undefined

const combinedReducers = combineReducers({
	cart: cartSlice.reducer
})

let mainReducer = combinedReducers

if (isCLient) {
	const { persistReducer } = require('redux-persist')
	const storage = require('redux-persist/lib/storage')

	mainReducer = persistReducer(persisConfig, combinedReducers)
}

export const store = configureStore({
	reducer: mainReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof mainReducer>
