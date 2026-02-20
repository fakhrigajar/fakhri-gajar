import React from "react";
import { bio } from "../../data/constants";
import HeroAnimatedSvg from "../Custom/HeroAnimatedSvg";

function HeroImage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <HeroAnimatedSvg />
        <img
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[200px] h-[200px] desktop:w-[300px] desktop:h-[300px] object-cover rounded-full"
          src={bio.image}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default HeroImage;
