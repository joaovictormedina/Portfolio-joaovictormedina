import { useTheme } from "../context/ThemeContext";
import useLanguage from "../language/useLanguage";
import "../about/about.css";

const Formacoes = () => {
  const { theme } = useTheme();
  const { isPort } = useLanguage();

  return (
    <div className={`formacoes ${theme}`}>
      <h3>{isPort ? "Formações" : "Education"}</h3>
      <ul className="education-list">
        <li>
          {isPort
            ? "2019 - Graduação em Licenciatura em Matemática."
            : "2019 - Bachelor's Degree in Mathematics Education."}
        </li>
        <li>
          {isPort
            ? "2019 - Pós-graduação em Gestão Escolar e Coordenação Pedagógica."
            : "2019 - Postgraduate in School Management and Pedagogical Coordination."}
        </li>
        <li>
          {isPort
            ? "2019 - Pós-graduação em Matemática Financeira e Estatística."
            : "2019 - Postgraduate in Financial Mathematics and Statistics."}
        </li>
        <li>
          {isPort
            ? "2023 - Licenciatura em Informática."
            : "2023 - Bachelor's Degree in Information Technology."}
        </li>
        <li>
          {isPort
            ? "2026 - Graduação em Análise e Desenvolvimento de Sistemas."
            : "2026 - Bachelor's Degree in Systems Analysis and Development."}
        </li>
      </ul>
    </div>
  );
};

export default Formacoes;
