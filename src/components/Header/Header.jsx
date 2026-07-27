import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { navigations } from "../../data/constants";

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "initial";
  }, [isOpen]);

  const [scrollInt, setScrollInt] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollInt(scrollY);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      const scrollPosition = window.pageYOffset + window.innerHeight / 3;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${scrollInt > 120 ? `header-shadow` : ``} flex justify-center items-center py-5 desktop:py-10 fixed top-0 left-0 duration-300 z-10 w-full bg-surface-1`}
    >
      <div className="w-4/5 flex items-center justify-between">
        <div>
          <a
            className="text-xl desktop:text-2xl font-extrabold text-white no-underline"
            href="/"
          >
            Fakhri Gajar.
          </a>
        </div>
        <nav
          className={`${isOpen ? `translate-x-0 opacity-100 visible` : `-translate-x-[10px] opacity-0 invisible`} z-[1] fixed top-0 left-0 duration-300 w-full h-full bg-surface-2 flex justify-center desktop:static desktop:opacity-100 desktop:visible desktop:bg-transparent desktop:w-fit desktop:h-fit desktop:translate-x-0`}
        >
          <ul className="flex flex-col items-center justify-center gap-[30px] desktop:flex-row desktop:gap-5">
            {navigations.map((navigation, index) => {
              return (
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  key={index}
                >
                  <a
                    className={`${
                      navigation.value === `#` + activeSection
                        ? `text-primary after:w-full`
                        : `text-text-secondary after:w-0`
                    } text-4xl desktop:text-lg no-underline font-semibold relative duration-300 hover:text-primary hover:after:w-full after:absolute after:-bottom-[7px] after:left-2/4 after:-translate-x-2/4 after:bg-primary after:h-1 after:duration-300`}
                    href={navigation.value}
                  >
                    {navigation.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Hamburger toggled={isOpen} size={25} toggle={setIsOpen} />
      </div>
    </header>
  );
}

export default Header;
