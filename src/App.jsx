import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  const { open } = useStateContext();

  return (
    <div className="font-display h-full bg-main">
      { open && <div className="filter"></div>}
      <Navbar />
      <main className="h-screen">
        <Hero />
      </main>
    </div>
  );
};

export default App;
