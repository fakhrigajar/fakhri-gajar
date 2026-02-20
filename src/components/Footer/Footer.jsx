import React from "react";
import { navigations, socials } from "../../data/constants";

function Footer() {
  return (
    <footer className="py-10 flex items-center justify-center bg-surface-1">
      <div className="w-3/4 flex flex-col items-center gap-[20px] text-text-muted">
        <nav>
          <ul className="hidden sm:flex gap-[20px]">
            {navigations.map((navigation, index) => {
              return (
                <li key={index}>
                  <a
                    className="no-underline text-text-secondary hover:text-primary duration-300"
                    href={navigation.value}
                  >
                    {navigation.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-[20px]">
          {socials.map((social, index) => {
            return (
              <a
                className="no-underline text-secondary"
                key={index}
                href={social.value}
              >
                <i
                  className={`${social.icon} cursor-pointer w-[50px] h-[50px] bg-primary text-primaryOverlay grid place-items-center text-3xl rounded-full hover:rotate-[360deg] hover:scale-125 duration-500`}
                ></i>
              </a>
            );
          })}
        </div>
        <p className="text-center">© 2024 Fakhri Gajar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
