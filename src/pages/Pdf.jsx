import React from "react";
import cv_en from "../assets/docs/English_CV.pdf";
import cv_es from "../assets/docs/Spanish_CV.pdf";
import { useTranslation } from "react-i18next";

const Pdf = () => {
  const [t, i18next] = useTranslation("global");
  let cv;
  if (i18next.language === "en") {
    cv = cv_en;
  } else if (i18next.language === "es") {
    cv = cv_es;
  }
  return (
    <div style={{ postion: "absolute", width: "100%", height: "100vh" }}>
      <object
        data={cv}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
};

export default Pdf;
