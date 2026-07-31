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
import { ToastContainer } from "react-toastify";
import Education from "./components/Education/Education";
import Journey from "./components/Journey/Journey";
import Certificates from "./components/Certificates/Certificates";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);

  return (
    <ConfigProvider>
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
      <Projects />
      <Education />
      <Journey />
      <Certificates />
      <Contact />
      <Footer />
    </ConfigProvider>
  );
}

export default App;
