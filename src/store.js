import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slices/movieReducer'

export const store = configureStore({
  reducer: {
      movie:movieReducer
  },
})