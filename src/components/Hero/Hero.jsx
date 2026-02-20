import React from "react";
import HeroImage from "./HeroImage";
import { Typewriter } from "react-simple-typewriter";
import { DefaultBtn } from "../components.style";
import { bio } from "../../data/constants";

function Hero() {
  return (
    <section
      id="about"
      className="text-white flex justify-center items-center bg-surface-2"
    >
      <div className="w-4/5 flex flex-col-reverse desktop:flex-row desktop:justify-between gap-5">
        <div className="w-full text-center desktop:text-left flex flex-col justify-center items-center desktop:items-start gap-[10px] text-xl leading- text-text-primary desktop:w-2/4 desktop:gap-5">
          <h1 className="flex flex-col gap-0 text-4xl font-bold w-full leading-[1.2] text-white desktop:gap-5 desktop:text-5xl">
            Hi, I am <span>{bio.name}</span>
          </h1>
          <div className="hidden desktop:flex desktop:flex-row flex-col gap-0 font-semibold text-4xl desktop:gap-[10px] desktop:text-[32px] text-text-secondary">
            I am a
            <span className="text-primary">
              <Typewriter words={bio.roles} loop={0} cursor />
            </span>
          </div>
          <p className="text-text-secondary pt-[10px] desktop:pt-0 text-base sm:text-xl w-full">
            {bio.description}
          </p>
          <a
            className="w-fit no-underline text-white pt-5 desktop:pt-0"
            target="_blank"
            href={bio.resume}
          >
            <DefaultBtn>Check Resume</DefaultBtn>
          </a>
        </div>
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
