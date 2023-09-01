import { combineReducers, configureStore } from '@reduxjs/toolkit'
import foodSlice from './slices/foodSlice'

const rootReducer = combineReducers({
  foodState: foodSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

// Define RootState type by merging all slice state types
export type RootState = ReturnType<typeof rootReducer>

export default store
