import { Food } from '../slices/foodSlice'

const FOODS_KEY = 'FOODS_KEY_OF_ALL_IN_ONE'

export function storeFoods(foods: Food[]) {
  try {
    if (foods) {
      localStorage.setItem(FOODS_KEY, JSON.stringify(foods))
    } else {
      localStorage.removeItem(FOODS_KEY)
    }
  } catch (error) {
    console.error('Error storing foods:', error)
  }
}

export function getFoods(): Food[] {
  try {
    const storedFoods = localStorage.getItem(FOODS_KEY)
    if (storedFoods) {
      return JSON.parse(storedFoods) as Food[]
    } else {
      return []
    }
  } catch (error) {
    // Handle any errors that might occur during retrieval
    console.error('Error retrieving foods:', error)
    return []
  }
}
