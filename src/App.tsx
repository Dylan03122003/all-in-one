import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import FoodPage from './page/food/FoodPage'
import HomePage from './page/home/HomePage'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodPage />} />
      </Routes>
    </>
  )
}

export default App
