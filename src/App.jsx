import "remixicon/fonts/remixicon.css";
import "./assets/styles/style.css";
import "./assets/styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { ConfigProvider } from "antd";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact/Contact";
import WorkWithMe from "./components/Contact/WorkWithMe";
import { ToastContainer } from "react-toastify";
import Education from "./components/Education/Education";
import Journey from "./components/Journey/Journey";
import Certificates from "./components/Certificates/Certificates";
import BackgroundEffects from "./components/Custom/BackgroundEffects";
import { antdThemes } from "./lib/antdTheme";
import { useTheme } from "./context/theme";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    <ConfigProvider theme={antdThemes[theme]}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <WorkWithMe />
    </ConfigProvider>
  );
}

export default App;
