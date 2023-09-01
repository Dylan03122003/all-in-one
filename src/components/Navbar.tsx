import { GoHomeFill } from 'react-icons/go'
import { PiBowlFoodFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="bg-blue-100">
      {/* Desktop */}
      <div className="hidden sm:flex items-center justify-between p-4">
        <Link to="/">Logo</Link>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link to={'/food'}>Food</Link>
          </li>
        </ul>
      </div>
      {/* Mobile */}
      <div className="flex sm:hidden items-center justify-evenly absolute bottom-0 w-full border-solid border-t-[1px] border-gray-400 p-2">
        <Link to="/" className="flex items-center justify-center flex-col">
          <GoHomeFill className="w-7 h-7 text-blue-500" />
          <p className="text-sm text-blue-500">Home</p>
        </Link>
        <Link to="/food" className="flex items-center justify-center flex-col">
          <PiBowlFoodFill className="w-7 h-7 text-blue-500" />
          <p className="text-sm text-blue-500">Food</p>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
