import { useSiteContent } from "../../context/site-content-context";
import CertificateCard from "./CertificateCard";

function Certificates() {
  const { certificates } = useSiteContent();

  return (
    <section
      id="certificates"
      className="flex justify-center items-center text-white"
    >
      <div className="w-4/5 flex flex-col items-center gap-[50px]">
        <div className="flex flex-col items-center text-center gap-5">
          <h1 className="font-semibold text-[40px]">Certificates</h1>
          <p className="text-text-secondary text-lg">
            Courses and skill certifications I have earned along the way.
          </p>
        </div>

        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 desktop:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] desktop:gap-5">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
