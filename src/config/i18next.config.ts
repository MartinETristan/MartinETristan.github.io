// i18n.ts
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { Cookies } from 'react-cookie';

// Función para leer cookies manualmente
const cookies = new Cookies();
const languageCookie = cookies.get('language') || 'en';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: languageCookie, 
    debug: false,  // console log de los cambios de idioma la depuración
    interpolation: {
      escapeValue: false,  // React ya se encarga de escapar los valores
    },
  });

export default i18n;