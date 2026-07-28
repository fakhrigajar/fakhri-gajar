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
              if (navigation.children) {
                const isChildActive = navigation.children.some(
                  (child) => child.value === `#` + activeSection,
                );

                return (
                  <li
                    key={index}
                    className="group relative flex flex-col items-center gap-[30px] desktop:gap-0"
                  >
                    <span
                      className={`${
                        isChildActive
                          ? `text-primary after:w-full`
                          : `text-text-secondary after:w-0`
                      } flex cursor-default items-center gap-1 text-4xl desktop:text-lg no-underline font-semibold relative duration-300 group-hover:text-primary group-hover:after:w-full after:absolute after:-bottom-[7px] after:left-2/4 after:-translate-x-2/4 after:bg-primary after:h-1 after:duration-300`}
                    >
                      {navigation.label}
                      <i className="ri-arrow-down-s-line hidden desktop:inline text-base"></i>
                    </span>

                    <ul className="flex flex-col items-center gap-[30px] desktop:hidden">
                      {navigation.children.map((child) => (
                        <li
                          key={child.value}
                          onClick={() => setIsOpen(false)}
                        >
                          <a
                            className={`${
                              child.value === `#` + activeSection
                                ? `text-primary`
                                : `text-text-secondary`
                            } text-2xl no-underline font-medium duration-300 hover:text-primary`}
                            href={child.value}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="invisible absolute left-1/2 top-full z-20 hidden w-52 -translate-x-1/2 pt-3 opacity-0 duration-200 desktop:block group-hover:visible group-hover:opacity-100">
                      <ul className="flex w-full flex-col gap-1 rounded-xl border border-surface-border bg-surface-card p-2 shadow-2xl">
                        {navigation.children.map((child) => (
                          <li key={child.value}>
                            <a
                              className={`${
                                child.value === `#` + activeSection
                                  ? `bg-primary/10 text-primary`
                                  : `text-text-secondary`
                              } block rounded-lg px-3 py-2 text-sm no-underline font-medium duration-200 hover:bg-primary/10 hover:text-primary`}
                              href={child.value}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

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
