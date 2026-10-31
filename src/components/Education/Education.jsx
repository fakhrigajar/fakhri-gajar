import { educations } from "../../data/constants";
import EducationCard from "./EducationCard";
import SectionHeading from "../Custom/SectionHeading";

function Education() {
  return (
    <section id="education" className="relative">
      <div className="container-page flex flex-col items-center gap-14">
        <SectionHeading
          title="My"
          highlight="Education"
          description="My education has been a journey of self-discovery and growth. My educational details are as follows."
        />
        <div className="grid w-full gap-6 desktop:grid-cols-2">
          {educations.map((education, index) => (
            <EducationCard
              key={index}
              educationList={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
