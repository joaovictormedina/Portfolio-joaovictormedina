import { Popover, Text, Button } from "@mantine/core";
import "../../styles/GlobalStyles.css"; 


function AlertaPrivado() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Ver Projeto</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text style={{ textAlign: 'justify', color: "black" }} size="xs">
          Desculpe, este projeto é privado e não poderá ser manipulado, mas você pode ver 
          <span className="link-space"> </span>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7244353991743000576/" target="_blank" rel="noopener noreferrer">
            Clicando aqui
          </a>.
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export default AlertaPrivado;
