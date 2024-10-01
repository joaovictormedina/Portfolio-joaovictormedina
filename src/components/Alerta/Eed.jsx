import { Popover, Text, Button } from "@mantine/core";
import "../../styles/GlobalStyles.css"; 


function Eed() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Ver Projeto</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text style={{ textAlign: 'justify' }} size="xs">
          Repositório no GitHub: 
          <span className="link-space"> </span>
          <a href="https://github.com/joaovictormedina/Espaco-educacao-4.0" target="_blank" rel="noopener noreferrer">
            Clique aqui
          </a>.
        </Text>
        <p></p>
        <Text style={{ textAlign: 'justify' }} size="xs">
          Demonstração: 
          <span className="link-space"> </span>
          <a href="https://joaovictormedina.github.io/Espaco-educacao-4.0/" target="_blank" rel="noopener noreferrer">
            Clique aqui
          </a>.
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default Eed;
