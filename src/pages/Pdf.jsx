import React from "react";
import cv from "../assets/docs/cv.pdf"

const Pdf = () => {
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
Pdf;
