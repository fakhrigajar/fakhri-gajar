import React from "react";
import { bio } from "../../data/constants";
import HeroAnimatedSvg from "../Custom/HeroAnimatedSvg";

function HeroImage() {
  return (
    <div className="hero__right">
      <div className="hero__right-image">
        <HeroAnimatedSvg />
        <img src={bio.image} alt="Hero Image" />
      </div>
    </div>
  );
}

export default HeroImage;
