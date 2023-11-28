import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { flipperSlice } from './flipper'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    flipper: flipperSlice.reducer,
  },
})