
import i18n from "i18next";

const changeLanguage = (): void => {
  const currentLanguage = i18n.language;
  
  if (currentLanguage === "es") {
    i18n.changeLanguage("en");
  } else {
    i18n.changeLanguage("es");
  }
};

export default changeLanguage;