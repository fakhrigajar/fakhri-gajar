import "remixicon/fonts/remixicon.css";
import "./assets/styles/main.css";
import "./assets/styles/style.css";
import "./assets/styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader/Loader";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "initial";
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : ""}
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
        theme="dark"
        transition:Bounce
      />
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
