import {Suspense} from 'react'
import {useTranslation}  from "react-i18next"
import Styles from '../styles/header.module.css'
import changeLanguage from '../utils/functions/changeLanguage';
import { TbWorld } from "react-icons/tb";

function header() {

  const { t } = useTranslation("header");

  return (
    <div className= {Styles.header}>
      <Suspense fallback='loading'>
        <a href='/'>{t("home")}</a>
        <a href='/portfolio'>{t("portfolio")}</a>
        <a href='/services'>{t("services")}</a>
        <a href='/about'>{t("about")}</a>
        <button onClick={changeLanguage} className='flex justify-center items-center gap-1'><TbWorld/> {t("Language")}</button>
      </Suspense>
    </div>
  )
}

export default header