import  './Header.css'
import data from "./data";
import HeaderImage from '../../assets/header.jpg';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={HeaderImage} alt='Header Portrait' />
        </div>
        <h3>Zvitambo Thomas Jindu</h3>
        <p>
          You are a click away from building your dream web platform or app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant app today!
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'>
            Lets Talk
          </a>
          <a href='#portfolio' className='btn light'>
            My Work
          </a>
          <div className='header__socials'>
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header