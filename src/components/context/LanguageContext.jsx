import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isPort, setIsPort] = useState(true);

  const toggleLanguage = () => {
    setIsPort(prev => !prev);
  };

  return (
    <LanguageContext.Provider value={{ toggleLanguage, isPort }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
