import React, { useEffect } from "react";
import "./App.css";
import {
  Navbar,
  Hero,
  SocialBar,
  About,
  Projects,
  SectionTitle,
  Section,
} from "./components";
import { useStateContext } from "./context/ContextProvider";
import Skills from "./components/Skills";

const App = () => {
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
        <Hero />
        <div className="py-[100px]">
          <SectionTitle title="About Me" />
          <div>
            <p className="text-slate-700 dark:text-slate-400 mx-auto max-w-4xl mt-6 text-center">
              {" "}
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2  md:px-16 xl:px-28 gap-8 mt-16">
            <About />
            <Skills />
          </div>
        </div>
        <Projects />
        <Section />
      </main>
    </div>
  );
};

export default App;
