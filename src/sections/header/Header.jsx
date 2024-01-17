import { useEffect } from 'react'
import HeaderImage from '../../assets/IMG-7814.jpg'
import './Header.css'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Sampana Abdou Latif</h3>
        <p data-aos="fade-up">
        Unlock the potential to bring your envisioned website or web application to 
        life with a simple click. Share the details of your project, and let's collaborate 
        to develop a cutting-edge, mobile-responsive, and highly efficient website tailored to your needs!
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header