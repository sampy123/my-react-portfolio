import AboutPic from '../../assets/IMG_4626.jpg'
import CV from '../../assets/cv.pdf'
import './About.css'
import { BsDownload } from "react-icons/bs";
import Card from '../../components/Card'
import data from './data';

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutPic} alt="About me" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>

                </Card>
              ))
            }
          </div>
          <p>
            I am a junior web and mobile developer and i completed my studies in Dakar, Senegal. As part of the Erasmus+ program, I spent seven months in Las Palmas, where I furthered my education with a one-month stint at the Technology Institute of the Canarian Islands. Graduating in Dakar, I hold a bachelor's degree in Distributed Application Development.
          </p>
          <p>
            My affinity for technology dates back to my childhood, and this passion has driven my career pursuits. In 2020, I actively participated in a makeathon held in Las Palmas, collaborating with fellow technology enthusiasts. Together, we successfully developed a prototype for an application with the primary objective of contributing to the establishment of Las Palmas as a smart, green island. This experience reflects my commitment to leveraging technology for positive environmental impact and showcases my dedication to innovative solutions.
          </p>
          <a href={CV} download className='btn primary'>Download CV <BsDownload /></a>
        </div>

      </div>
    </section>
  )
}

export default About