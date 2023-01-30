import React, { useEffect } from "react";
import "./App.css";
import { Navbar, Hero, SocialBar, About } from "./components";
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
        <div className="pt-[100px]">
          <h2 className="text-black text-3xl font-bold text-center mx-auto dark:text-slate-200 border-b border-gray-200 dark:border-slate-600 pb-3 max-w-4xl">About Me</h2>
          <div>
            <p className="dark:text-slate-400 mx-auto max-w-4xl mt-6 text-center"> Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology </p>
          </div>
          <div className="grid md:grid-cols-2  md:px-16 xl:px-28 gap-8 mt-16">
            <About />
            <Skills />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
