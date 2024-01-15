import './Contact.css';
import contact from './data'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Feel free to reach out to me using any of the contact links provided! 
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contact.map(contact => <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer' >{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact