import { useState } from "react";
import { certificates } from "../../data/constants";
import CertificateCard from "./CertificateCard";
import SectionHeading from "../Custom/SectionHeading";

const INITIAL_VISIBLE = 6;

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
  const monthMatches = [
    ...date
      .toLowerCase()
      .matchAll(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/g),
  ];
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

const sortedCertificates = [...certificates].sort(byDateDesc);

function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll
    ? sortedCertificates
    : sortedCertificates.slice(0, INITIAL_VISIBLE);

  const toggleShowAll = () => {
    if (showAll) {
      document
        .getElementById("certificates")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="certificates" className="relative">
      <div className="container-page flex flex-col items-center gap-14">
        <SectionHeading
          title="Licenses &"
          highlight="Certificates"
          description="Courses and skill certifications I have earned along the way."
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 desktop:grid-cols-3">
          {visibleCertificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
              index={index}
              revealed={index >= INITIAL_VISIBLE}
            />
          ))}
        </div>

        {sortedCertificates.length > INITIAL_VISIBLE && (
          <button
            type="button"
            onClick={toggleShowAll}
            aria-expanded={showAll}
            className="btn btn-ghost group"
          >
            {showAll
              ? "Show less"
              : `Show all ${sortedCertificates.length} certificates`}
            <i
              aria-hidden="true"
              className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${
                showAll ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            ></i>
          </button>
        )}
      </div>
    </section>
  );
}

export default Certificates;
