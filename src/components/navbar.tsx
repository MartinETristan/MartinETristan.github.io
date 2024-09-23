import { Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Styles from "../styles/navbar.module.css";
import changeLanguage from "../utils/functions/changeLanguage";
import { TbWorld } from "react-icons/tb";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"; // Importa los íconos de sol y luna

function Header() {
  const { t } = useTranslation("header");
  const [darkMode, setDarkMode] = useState(false);

  // Verifica si hay un valor almacenado en localStorage cuando el componente monta
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Función para hacer toggle entre dark y light mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className={Styles.header}>
      <Suspense fallback="loading">
        <div className={Styles.list}>
          <Link to="/">{t("home")}</Link>
          <Link to="/portfolio">{t("portfolio")}</Link>
          <Link to="/services">{t("services")}</Link>
          <Link to="/about">{t("about")}</Link>
        </div>
        <div className={Styles.list}>
          <button
            onClick={changeLanguage}
            className="flex justify-center items-center gap-1"
          >
            <TbWorld /> {t("Language")}
          </button>

          <button onClick={toggleDarkMode}>
            {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </div>
      </Suspense>
    </div>
  );
}

export default Header;
