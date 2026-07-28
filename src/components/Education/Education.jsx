import { useSiteContent } from "../../context/site-content-context";
import EducationCard from "./EducationCard";

function Education() {
  const { educations } = useSiteContent();

  return (
    <section
      id="education"
      className="flex justify-center bg-surface-1 items-center text-text-primary duration-300"
    >
      <div className="w-4/5 flex flex-col justify-center items-center text-center gap-[50px]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-semibold text-[40px]">Education</h1>
          <p className="text-text-secondary text-lg">
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5">
          {educations.map((education, index) => (
            <EducationCard key={index} educationList={education} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
