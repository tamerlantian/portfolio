import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import { ContextProvider } from "./context/ContextProvider";
import i18next from "i18next";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

root.render(
  <ContextProvider>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </ContextProvider>
);
