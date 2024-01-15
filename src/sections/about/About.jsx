import AboutPic from '../../assets/IMG_4626.jpg'
import CV from '../../assets/moi.pdf'
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non molestie libero, sed scelerisque risus. Integer nec tincidunt metus, a fringilla libero. Nulla dictum odio non molestie vehicula. Nullam id enim ac ipsum porttitor volutpat. Morbi maximus turpis quis dignissim scelerisque. Nunc laoreet quam vel metus varius, quis porttitor mi semper. Ut convallis felis vel ligula egestas posuere. 
          </p>
          <p>
          Pellentesque hendrerit, velit porta elementum varius, nulla felis posuere enim, in viverra nulla massa ut dui. Fusce vulputate condimentum volutpat. Sed et pulvinar eros. Donec placerat nisi nunc. Maecenas efficitur velit sit amet quam tristique, quis ornare orci commodo. Suspendisse potenti. In hac habitasse platea dictumst. 
          </p>
          <a href={CV} download className='btn primary'>Download CV <BsDownload /></a>
        </div>

      </div>
    </section>
  )
}

export default About