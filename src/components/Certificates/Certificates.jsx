import { certificates } from "../../data/constants";
import CertificateCard from "./CertificateCard";

const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function parseCertificateDate(date) {
  if (!date) return null;
  const yearMatch = date.match(/\d{4}/);
  if (!yearMatch) return null;
  const year = Number(yearMatch[0]);
  const monthMatches = [...date.toLowerCase().matchAll(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/g)];
  const monthIndex =
    monthMatches.length > 0
      ? MONTHS.indexOf(monthMatches[monthMatches.length - 1][0])
      : 0;
  return year * 12 + monthIndex;
}

function byDateDesc(a, b) {
  const dateA = parseCertificateDate(a.date);
  const dateB = parseCertificateDate(b.date);
  if (dateA === null && dateB === null) return 0;
  if (dateA === null) return 1;
  if (dateB === null) return -1;
  return dateB - dateA;
}

function Certificates() {
  const sortedCertificates = [...certificates].sort(byDateDesc);

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
          {sortedCertificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
