import { Popover, Text, Button } from "@mantine/core";
import "../../styles/GlobalStyles.css"; 
import useLanguage from '../language/useLanguage';

function AlertaPrivado() {
  const { isPort } = useLanguage(); 

  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>{isPort ? 'Ver Projeto' : 'View Project'}</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text style={{ textAlign: 'justify', color: "black" }} size="xs">
          {isPort 
            ? 'Desculpe, este projeto é privado e não poderá ser manipulado, mas você pode ver '
            : 'Sorry, this project is private and cannot be manipulated, but you can view '}
          <span className="link-space"> </span>
          <a 
            href="https://www.linkedin.com/feed/update/urn:li:activity:7244353991743000576/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {isPort ? 'Clicando aqui' : 'Clicking here'}
          </a>.
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default AlertaPrivado;
