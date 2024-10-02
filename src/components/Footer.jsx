import githubIcon from '../cards/github.svg';
import linkedinIcon from '../cards/linkedin.svg'; 

const Footer = () => {
  const contacts = [
    {
      title: 'Meu Contato:',
      description: '21 98757-0827',
    },
    {
      title: 'Email:',
      description: `joaovictor.zipp@gmail.com`,
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
