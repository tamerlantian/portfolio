import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pdf from "../pages/Pdf";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf" element={<Pdf />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
