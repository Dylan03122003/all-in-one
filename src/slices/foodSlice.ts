import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFoods, storeFoods } from '../util/foodLocalStorage'

export interface Food {
  id: number
  name: string
}

export interface FoodState {
  foods: Food[]
}

const initialState: FoodState = {
  foods: getFoods(),
}

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<Food>) => {
      state.foods.push(action.payload)
      storeFoods(state.foods)
    },
    updateFood: (state, action: PayloadAction<Food>) => {
      state.foods = state.foods.map((food) =>
        food.id === action.payload.id ? action.payload : food,
      )
      storeFoods(state.foods)
    },
    deleteFood: (state, action: PayloadAction<number>) => {
      state.foods = state.foods.filter((food) => food.id !== action.payload)
      storeFoods(state.foods)
    },
  },
})

export const { addFood, updateFood, deleteFood } = foodSlice.actions

export default foodSlice.reducer
