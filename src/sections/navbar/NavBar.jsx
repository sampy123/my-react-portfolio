import profpic from '../../assets/avatar.png'
import './NavBar.css'
import data from './data'
import { IoMdColorPalette } from "react-icons/io";
import {useModalContext} from '../../context/modal-context'

const NavBar = () => {
  const {showModalHandler} = useModalContext();
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={profpic} alt="profile_picture" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon' onClick={showModalHandler}><IoMdColorPalette /></button>
      </div>
    </nav>
  )
}

export default NavBar