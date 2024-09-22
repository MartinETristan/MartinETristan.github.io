import { useEffect } from "react";
import Styles from "../styles/message.module.css";

interface MessageProps {
  title: string;
  message: string;
  onClose: () => void; // Función para cerrar el mensaje
}

function Message({ title, message, onClose }: MessageProps) {
  // Efecto para deshabilitar el scroll del body cuando el componente está montado
  useEffect(() => {
    // Evitar scroll en la página
    document.body.style.overflow = "hidden";

    // Restaurar el scroll del body cuando se desmonta el componente
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Reemplazar los dobles espacios por un salto de línea (<br />)
  const linebrake = message.replace(/  /g, "<br />");
  const formattedMessage = linebrake.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  return (
    <div className={Styles.item}>
      <div className={Styles.item_cont}>
        <div className={Styles.message_item}>
          <header className={Styles.title}>{title}</header>
          {/* Usar dangerouslySetInnerHTML para insertar HTML directamente */}
          <p
            className={Styles.message}
            dangerouslySetInnerHTML={{ __html: formattedMessage }}
          ></p>
          <button onClick={onClose} className={Styles.button}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
