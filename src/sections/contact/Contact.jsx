import contacts from "./data";
import "./Contact.css";

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Get In Touch</h2>
      <p>Message me via any of the links below!</p>
      <div className='container contact__container'>
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
