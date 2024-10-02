import githubIcon from '../cards/github.svg';
import linkedinIcon from '../cards/linkedin.svg'; 
import "../styles/GlobalStyles.css";

const Footer = () => {
  const contacts = [
    {
      title: 'Meu Contato:',
      description: (
        <a
          href="https://wa.me/5512987570827"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          21 98757-0827
        </a>
      ),
    },
    {
      title: 'Email:',
      description: (
        <a
          href="mailto:joaovictor.zipp@gmail.com"
          className="contact-link"
        >
          joaovictor.zipp@gmail.com
        </a>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contacts">
          {contacts.map((contact, index) => (
            <div className="footer-item" key={index}>
              <h4>{contact.title}</h4>
              <p>{contact.description}</p>
            </div>
          ))}
        </div>
        <div className="footer-social">
          <a href="https://github.com/joaovictormedina" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/joaovictormedina/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
