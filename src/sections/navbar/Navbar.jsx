import './Navbar.css'
import Logo from '../../assets/logo.jpg';
import menuItems from './data';
import { useModalContext } from "../../context/modal-context";
import {IoIosColorPalette} from 'react-icons/io'
const Navbar = () => {

   const { showModalHandler } = useModalContext();
  return (
    <nav>
      <div className='container nav__container'>
        <a href='index.html' className='nav__logo'>
          <img src={Logo} alt='Logo' />
        </a>
        <ul className='nav__menu'>
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <button id='theme__icon' onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
}

export default Navbar