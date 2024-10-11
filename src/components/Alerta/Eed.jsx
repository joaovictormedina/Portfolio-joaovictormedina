import { Popover, Text, Button } from "@mantine/core";
import "../../styles/GlobalStyles.css"; 
import useLanguage from '../language/useLanguage'; 

function Eed() {
  const { isPort } = useLanguage(); 

  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>{isPort ? 'Ver Projeto' : 'View Project'}</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text style={{ textAlign: 'justify', color: "black" }} size="xs">
          {isPort ? 'Repositório no GitHub:' : 'GitHub Repository:'} 
          <span className="link-space"> </span>
          <a 
            href="https://github.com/joaovictormedina/Espaco-educacao-4.0" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {isPort ? 'Clique aqui' : 'Click here'}
          </a>.
        </Text>
        <p></p>
        <Text style={{ textAlign: 'justify', color: "black" }} size="xs">
          {isPort ? 'Demonstração:' : 'Demo:'} 
          <span className="link-space"> </span>
          <a 
            href="https://joaovictormedina.github.io/Espaco-educacao-4.0/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {isPort ? 'Clique aqui' : 'Click here'}
          </a>.
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default Eed;
