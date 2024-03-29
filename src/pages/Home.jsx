import React, { useEffect } from "react";
import "../App.css";
import {
  Navbar,
  Banner,
  SocialBar,
  Projects,
  Hobbies,
  Contact,
  Footer,
  AboutMe,
} from "../components";
import { useStateContext } from "../context/ContextProvider";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation("global")
  const { open, toggleTheme } = useStateContext();

  useEffect(() => {
    if (toggleTheme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  });

  return (
    <div className="font-display h-ful">
      {open && <div className="filter"></div>}
      <Navbar />
      <aside className="fixed bottom-[10%] left-5 hidden xl:block">
        <SocialBar />
      </aside>
      <main className="container h-screen w-full max-w-[1600px] min-h-screen mx-auto px-6 xl:px-32 ">
        <Banner />
        <AboutMe />
        <Projects t={t}/>
        <Hobbies t={t} />
        <Contact t={t} />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
