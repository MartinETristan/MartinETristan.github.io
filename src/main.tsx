import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes/routes";
import "./config/i18next.config.ts";
import { CookiesProvider } from "react-cookie";
import { store } from "./utils/api/store/store";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </CookiesProvider>
  </StrictMode>
);
