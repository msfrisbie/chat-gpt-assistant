import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/search/searchSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
  }
})