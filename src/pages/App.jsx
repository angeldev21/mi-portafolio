import { useEffect } from "react";
import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Welcome from "../components/Welcome";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import LoadingScreen from "./LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <main>
        <Welcome />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </MainLayout>
  );
};

export default App;
