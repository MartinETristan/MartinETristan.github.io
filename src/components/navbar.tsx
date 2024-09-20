import {Suspense} from 'react'
import { Link } from "react-router-dom";
import {useTranslation}  from "react-i18next"
import Styles from '../styles/header.module.css'
import changeLanguage from '../utils/functions/changeLanguage';
import { TbWorld } from "react-icons/tb";

function header() {

  const { t } = useTranslation("header");

  return (
    <div className= {Styles.header}>
      <Suspense fallback='loading'>
      <Link to="/">{t("home")}</Link>
      <Link to="/portfolio">{t("portfolio")}</Link>
      <Link to="/services">{t("services")}</Link>
      <Link to="/about">{t("about")}</Link>
        <button onClick={changeLanguage} className='flex justify-center items-center gap-1'><TbWorld/> {t("Language")}</button>
      </Suspense>
    </div>
  )
}

export default header