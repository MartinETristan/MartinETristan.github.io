import { useTranslation } from "react-i18next";
import Styles from "../styles/footer.module.css";
import { useState } from "react";
import Message from "../components/message";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaPatreon } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

function footer() {
  let date: Date = new Date();
  const { t } = useTranslation("footer");

  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);
  const [messageContent, setMessageContent] = useState<{
    title: string;
    message: string;
  }>({
    title: "",
    message: "",
  });

  // Muestra el mensaje con el contenido adecuado
  const showMessage = (title: string, message: string) => {
    setMessageContent({ title, message });
    setIsMessageVisible(true);
  };

  // Oculta el mensaje
  const hideMessage = () => {
    setIsMessageVisible(false);
  };

  return (
    <>
      {isMessageVisible && (
        <Message
          title={messageContent.title}
          message={messageContent.message}
          onClose={hideMessage}
        />
      )}
      <footer className={Styles.footer}>
        <div className={Styles.Top_Footer}>
          <div className={Styles.list_cont}>
            <header className={Styles.titles}> {t("about.title")}</header>
            <ul className={Styles.lists}>
              <li>
                <a className={Styles.list_items} onClick={() => showMessage(t("about.privacy.title"), t("about.privacy.description"))}>{t("about.privacy.title")}</a>
              </li>
              <li>
                <a className={Styles.list_items} onClick={() => showMessage(t("about.terms.title"), t("about.terms.description"))}>{t("about.terms.title")}</a>
              </li>
              <li>
                <a className={Styles.list_items} onClick={() => showMessage(t("about.cookies.title"), t("about.cookies.description"))}>{t("about.cookies.title")}</a>
              </li>
            </ul>
          </div>
          <div className={Styles.list_cont}>
            <header className={Styles.titles}> {t("social.title")}</header>
            <ul className={Styles.lists}>
              <li>
                <a
                  href="https://www.facebook.com/Martin.Tristan.8/"
                  target="_blank"
                  rel="noreferrer"
                  className={Styles.list_items}
                >
                  <FaFacebookSquare /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/martin_e._tristan/"
                  target="_blank"
                  rel="noreferrer"
                  className={Styles.list_items}
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/martín-emmanuel-tristán-méndez-762072229"
                  target="_blank"
                  rel="noreferrer"
                  className={Styles.list_items}
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.list_cont}>
            <header className={Styles.titles}> {t("supportme.title")}</header>
            <ul className={Styles.lists}>
              <li>
                <a
                  href="https://buymeacoffee.com/martinetristan"
                  target="_blank"
                  rel="noreferrer"
                  className={Styles.list_items}
                >
                  <SiBuymeacoffee /> {t("supportme.donate")}
                </a>
              </li>
              <li>
                <a
                  href="https://patreon.com/martinetristan"
                  target="_blank"
                  rel="noreferrer"
                  className={Styles.list_items}
                >
                  {" "}
                  <FaPatreon /> {t("supportme.sponsor")}
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.list_cont}>
            <header className={Styles.titles}> {t("trmsystems.title")}</header>
            <ul className={Styles.lists}>
              <li>
                <p className={Styles.list_items_static}>{t("trmsystems.description")}</p>
              </li>
              <li>
                <a
                  className={Styles.links}
                  href="https://www.linkedin.com/company/trmsystems"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("trmsystems.contact")}
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.list_cont}>
            <header className={Styles.titles}> {t("trmstudio.title")}</header>
            <ul className={Styles.lists}>
              <li>
                <p className={Styles.list_items_static}>{t("trmstudio.description")}</p>
              </li>
              <li>
                <a
                  className={Styles.links}
                  href="https://www.linkedin.com/company/trmstudio"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("trmstudio.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <p className={Styles.End}>
          Copyright &copy; {date.getFullYear()} Martin E. Tristán. {t("rights")}
          .
        </p>
      </footer>
    </>
  );
}

export default footer;
