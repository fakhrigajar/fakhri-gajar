import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { navigations, socials } from "../../data/constants";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openGroupIndex, setOpenGroupIndex] = useState(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);

  const isActive = (value) => value === `#` + activeSection;
  const activeIndex = navigations.findIndex((navigation) =>
    navigation.children
      ? navigation.children.some((child) => isActive(child.value))
      : isActive(navigation.value),
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenGroupIndex(null);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    let frame = 0;

    const update = () => {
      frame = 0;
      const { scrollY, innerHeight } = window;
      const maxScroll = document.documentElement.scrollHeight - innerHeight;
      const isAtBottom = maxScroll > 0 && scrollY / maxScroll > 0.995;

      let currentSection = "";
      const scrollPosition = scrollY + innerHeight / 3;
      sections.forEach((section) => {
        if (scrollPosition >= section.getBoundingClientRect().top + scrollY) {
          currentSection = section.id;
        }
      });
      if (isAtBottom && sections.length > 0) {
        currentSection = sections[sections.length - 1].id;
      }

      setIsScrolled(scrollY > 20);
      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Slide the pill behind the active desktop link.
  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return undefined;

    const update = () => {
      const item = itemRefs.current[activeIndex];
      if (!item) {
        indicator.style.opacity = "0";
        return;
      }
      indicator.style.opacity = "1";
      indicator.style.width = `${item.offsetWidth}px`;
      indicator.style.transform = `translateX(${item.offsetLeft}px)`;
    };

    update();
    document.fonts?.ready.then(update);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeIndex]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const desktopLinkClass = (active) =>
    `relative z-[1] flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
      active ? "text-primary" : "text-text-secondary hover:text-text-primary"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          aria-hidden="true"
          className={`absolute inset-0 border-b transition-all duration-500 ${
            isScrolled && !isOpen
              ? "border-surface-border/70 bg-surface-2/70 shadow-[0_10px_30px_-18px_rgb(var(--color-shadow)/0.35)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        ></div>

        <div
          className={`container-page relative flex items-center justify-between gap-4 transition-all duration-500 ${
            isScrolled ? "py-3" : "py-4 desktop:py-6"
          }`}
        >
          <a
            href="/"
            className="group flex items-center gap-3 font-display text-lg font-bold text-text-primary no-underline desktop:text-xl"
          >
            <span
              aria-hidden="true"
              className="logo-mark h-10 w-10 shrink-0 transition-transform duration-500"
            ></span>
            <span>
              Fakhri Gajar<span className="text-primary">.</span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden desktop:block">
            <ul className="relative flex items-center gap-1 rounded-full border border-surface-border/80 bg-surface-card/60 p-1.5 shadow-card backdrop-blur-xl">
              <span
                ref={indicatorRef}
                aria-hidden="true"
                className="absolute bottom-1.5 left-0 top-1.5 rounded-full bg-primary/10 opacity-0 ring-1 ring-inset ring-primary/25 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              ></span>
              {navigations.map((navigation, index) => {
                const setItemRef = (node) => {
                  itemRefs.current[index] = node;
                };

                if (navigation.children) {
                  return (
                    <li
                      key={navigation.label}
                      ref={setItemRef}
                      className="group relative"
                    >
                      <button
                        type="button"
                        aria-haspopup="true"
                        className={desktopLinkClass(index === activeIndex)}
                      >
                        {navigation.label}
                        <i
                          aria-hidden="true"
                          className="ri-arrow-down-s-line text-base transition-transform duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
                        ></i>
                      </button>

                      <div className="invisible absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <ul className="flex flex-col gap-1 rounded-2xl border border-surface-border bg-surface-card/95 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
                          {navigation.children.map((child) => (
                            <li key={child.value}>
                              <a
                                href={child.value}
                                className={`${
                                  isActive(child.value)
                                    ? "bg-primary/10 text-primary"
                                    : "text-text-secondary hover:bg-primary/5 hover:text-text-primary"
                                } group/item flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium no-underline transition-colors duration-200`}
                              >
                                {child.label}
                                <i
                                  aria-hidden="true"
                                  className="ri-arrow-right-up-line opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:opacity-60"
                                ></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={navigation.value} ref={setItemRef}>
                    <a
                      href={navigation.value}
                      className={`${desktopLinkClass(index === activeIndex)} no-underline`}
                    >
                      {navigation.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="-mr-2 text-text-primary desktop:hidden">
              <Hamburger
                toggled={isOpen}
                size={22}
                rounded
                label="Toggle menu"
                toggle={(nextOpen) => {
                  setIsOpen(nextOpen);
                  if (!nextOpen) setOpenGroupIndex(null);
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-[visibility] desktop:hidden ${
          isOpen ? "visible" : "invisible delay-500"
        }`}
      >
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-surface-2/90 backdrop-blur-2xl transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <nav
          aria-label="Mobile"
          className="pointer-events-none relative flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28"
        >
          <ul className="pointer-events-auto flex flex-col">
            {navigations.map((navigation, index) => {
              const itemNumber = String(index + 1).padStart(2, "0");
              const isGroupOpen = openGroupIndex === index;

              return (
                <li
                  key={navigation.label}
                  style={{
                    transitionDelay: isOpen ? `${120 + index * 70}ms` : "0ms",
                  }}
                  className={`border-b border-surface-border/70 transition-all duration-500 ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {navigation.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenGroupIndex(isGroupOpen ? null : index)
                        }
                        aria-expanded={isGroupOpen}
                        className={`${
                          index === activeIndex
                            ? "text-primary"
                            : "text-text-primary"
                        } flex w-full items-center justify-between py-4 text-left font-display text-3xl font-semibold`}
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-primary">
                            {itemNumber}
                          </span>
                          {navigation.label}
                        </span>
                        <i
                          aria-hidden="true"
                          className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${
                            isGroupOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isGroupOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="flex flex-col pb-4 pl-9">
                            {navigation.children.map((child) => (
                              <li key={child.value}>
                                <a
                                  href={child.value}
                                  onClick={closeMenu}
                                  className={`${
                                    isActive(child.value)
                                      ? "text-primary"
                                      : "text-text-secondary"
                                  } block py-2.5 text-lg font-medium no-underline transition-colors hover:text-primary`}
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={navigation.value}
                      onClick={closeMenu}
                      className={`${
                        index === activeIndex
                          ? "text-primary"
                          : "text-text-primary"
                      } flex items-baseline gap-4 py-4 font-display text-3xl font-semibold no-underline transition-colors hover:text-primary`}
                    >
                      <span className="font-mono text-xs text-primary">
                        {itemNumber}
                      </span>
                      {navigation.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div
            style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
            className={`pointer-events-auto mt-auto flex gap-3 pt-10 transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.value}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="icon-btn"
              >
                <i aria-hidden="true" className={social.icon}></i>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
