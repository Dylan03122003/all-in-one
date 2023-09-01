import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/ui/Button'
import TextField from '../../components/ui/TextField'
import { Food, addFood, deleteFood, updateFood } from '../../slices/foodSlice'
import { RootState } from '../../store'

const FoodPage = () => {
  const dispatch = useDispatch()
  const { foods } = useSelector((state: RootState) => state.foodState)
  const [food, setFood] = useState<Food>({ id: 0, name: '' })
  const [shownMenuFoodID, setShownMenuFoodID] = useState<number>()
  const [toUpdate, setToUpdate] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!food.name) return

    if (!toUpdate) dispatch(addFood({ id: Date.now(), name: food.name }))
    else dispatch(updateFood(food))
    setFood({ id: 0, name: '' })

    if (toUpdate) setToUpdate(false)
  }

  function handleShowMenu(foodID: number) {
    setShownMenuFoodID((prevState) => {
      if (prevState && prevState === foodID) return 0
      return foodID
    })
  }

  return (
    <div className="w-[300px] mx-auto">
      <h2 className="text-xl mb-5 text-center">Recommended eateries</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-2"
      >
        <TextField
          label="Enter food"
          rounded="rounded-md"
          width="w-full"
          onChange={(e) =>
            setFood((prevFood) => ({ ...prevFood, name: e.target.value }))
          }
          value={food.name}
        />
        <Button type="submit">{toUpdate ? 'Update' : 'Add'}</Button>
      </form>

      <div>
        {foods.map((food) => (
          <div
            onClick={() => handleShowMenu(food.id)}
            key={food.id}
            className={`relative w-full cursor-pointer text-center px-4 py-4 mb-2 rounded-md text-gray-700 font-medium bg-gradient-to-tr from-[#D3F5CF] via-[#A8DBFA] to-[#635EE2]`}
          >
            {shownMenuFoodID !== food.id && <p>{food.name}</p>}
            {shownMenuFoodID === food.id && (
              <div className="flex items-center justify-center gap-4">
                <Button
                  onClick={() => {
                    setToUpdate(true)
                    setFood(food)
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => {
                    dispatch(deleteFood(food.id))
                  }}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodPage
