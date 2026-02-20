import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

function ExperienceCard({
  id,
  experienceList,
  readMoreActive,
  setReadMoreActive,
}) {
  const [activeCard, setActiveCard] = useState(1);

  let firstPartOfDescription = "";
  let firstPart = null;
  const settingFirstPartOfText = (text) => {
    let result;
    const words = text.split(" ");
    result = text;
    if (words.length > 30) {
      firstPart = words.slice(0, 30);
      result = firstPart.join(" ");
    }
    firstPartOfDescription = result;
  };
  settingFirstPartOfText(experienceList.description);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        background: "#1c1c27",
        color: "#fff",
        borderBottom: "4px solid #854ce6",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #854ce6" }}
      date={experienceList.date}
      iconStyle={{ background: "#854ce6", color: "#fff" }}
      icon={
        <img
          className="rounded-full"
          src={experienceList.image}
          alt={experienceList.company}
        />
      }
    >
      <div className=" gap-0">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">{experienceList.company}</h1>
          <h3>{experienceList.position}</h3>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-text-secondary text-sm font-medium leading-[1.3] text-justify">
            <div
              className={`experience__card-content ${
                readMoreActive ? `read-more-active` : ``
              }`}
            >
              <p>
                {readMoreActive.index === id && readMoreActive.boolean
                  ? experienceList.description
                  : firstPartOfDescription}
                {firstPart !== null ? (
                  <span
                    className="text-white pl-[5px] font-medium cursor-pointer"
                    onClick={() => {
                      setActiveCard(!activeCard);
                      setReadMoreActive({
                        ...readMoreActive,
                        index: id,
                        boolean: activeCard,
                      });
                    }}
                  >
                    {readMoreActive.index === id && readMoreActive.boolean
                      ? "show less..."
                      : "read more..."}
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {experienceList.skills ? (
              <>
                <h1>Skills:</h1>
                {experienceList.skills.map((experience, index) => (
                  <li
                    className="px-2 py-1 text-xs h-fit bg-primaryOverlay rounded-xl text-primary"
                    key={index}
                  >
                    {experience}
                  </li>
                ))}
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      <div className="timeline-image-wrapper">
        <img src="" alt="" />
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;

// <div className="experience__card" data-aos="fade-up">
//   <div className="experience__card-left">
//     <span></span>
//     <span></span>
//   </div>
//   <div className="experience__card-right">
//     <div className="experience__card-top">
//       <img src={experienceList.image} alt="" />
//       <div className="experience__card-title">
//         <h1>{experienceList.position}</h1>
//         <h2>{experienceList.company}</h2>
//         <p>{experienceList.date}</p>
//       </div>
//     </div>
//     <div className="experience__card-bottom">
//       <div
//         className={`experience__card-content ${
//           readMoreActive ? "read-more-active" : ""
//         }`}
//       >
//         <p>
//           {readMoreActive.index === id && readMoreActive.boolean
//             ? experienceList.description
//             : firstPartOfDescription}
//           {firstPart !== null ? (
//             <span
//               onClick={() => {
//                 setActiveCard(!activeCard);
//                 setReadMoreActive({
//                   ...readMoreActive,
//                   index: id,
//                   boolean: activeCard,
//                 });
//               }}
//             >
//               {readMoreActive.index === id && readMoreActive.boolean
//                 ? "show less..."
//                 : "read more..."}
//             </span>
//           ) : (
//             ""
//           )}
//         </p>
//       </div>
//       {experienceList.skills ? (
//         <div className="experience__card-skills">
//           <p>Skills:</p>
//           <ul>
//             {experienceList.skills?.map((skill, index) => {
//               return <li key={index}>{skill}</li>;
//             })}
//           </ul>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   </div>
// </div>;
