import CatImage from '../assets/images/cat.svg?react'
import { SiMinutemailer } from 'react-icons/si'

const Navbar = () => {
  function smoothScroll() {
    document.querySelector('#bottom')?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <nav className="flex justify-between items-center">
      {/*Logo*/}
      <a href="#">
        <CatImage className="h-20 w-20" />
      </a>

      {/*Menu button*/}
      <button
        onClick={smoothScroll}
        className="p-2 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-200"
      >
        <SiMinutemailer size={25} />
      </button>
    </nav>
  )
}

export default Navbar
