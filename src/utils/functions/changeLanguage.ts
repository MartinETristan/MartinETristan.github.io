
import i18n from "i18next";
import { Cookies } from 'react-cookie';

// Función para cambiar el idioma y actualizar la cookie
const changeLanguage = (): void => {
  const cookies = new Cookies();
  const currentLanguage = i18n.language;

  if (currentLanguage === 'es') {
    i18n.changeLanguage('en');
    cookies.set('language', 'en', { path: '/' });  
  } else {
    i18n.changeLanguage('es');
    cookies.set('language', 'es', { path: '/' });  
  }
};

export default changeLanguage;