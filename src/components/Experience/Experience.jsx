import React, { useState } from "react";
import { experiences } from "../../data/constants";
import ExperienceCard from "./ExperienceCard";

import "react-vertical-timeline-component/style.min.css";

import { VerticalTimeline } from "react-vertical-timeline-component";

function Experience() {
  const [readMoreActive, setReadMoreActive] = useState({
    index: "",
    boolean: "",
  });

  return (
    <section id="experience">
      <div className="flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-[10px] items-center">
          <h1 className="font-semibold text-[40px] text-white">My Journey</h1>
          <p className="text-text-secondary text-lg">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              readMoreActive={readMoreActive}
              setReadMoreActive={setReadMoreActive}
              experienceList={experience}
              id={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;

//  <section class="section-large background-secondary">
//       <div class="container-x-small">
//         <div class="title-wrapper-x-large">
//           <div class="badge-outline">
//             <div>Vario Our Words</div>
//           </div>
//           <h3 class="h3-heading">Financial Planning Journey</h3>
//           <p class="paragraph-regular">
//             All Vario plans come with a{" "}
//             <span class="text-span-strong">14-day free</span> trial period.
//           </p>
//         </div>
//         <div class="column-large">
//           <div class="w-layout-grid timeline-row-grid first">
//             <div
//               id="w-node-_1c53c435-a769-e51a-1329-d750c663187e-fd60769a"
//               class="timeline-text-wrapper"
//             >
//               <div class="paragraph-small text-color-secondary">
//                 08 Feb, 2024
//               </div>
//             </div>
//             <div class="timeline-line-wrapper">
//               <div class="timeline-top-line"></div>
//               <div class="timeline-line first"></div>
//               <div class="timeline-dot">
//                 <div class="timeline-dot-small"></div>
//               </div>
//             </div>
//             <div
//               id="w-node-_8d549e6e-8b54-dc7c-d4d0-f87352d2f047-fd60769a"
//               class="timeline-card"
//             >
//               <div class="icon-small w-embed">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M15.5892 1.91082C15.2638 1.58539 14.7362 1.58539 14.4107 1.91083L9.41074 6.91083C9.25446 7.06711 9.16667 7.27907 9.16667 7.50008V10.0001C9.16667 10.2211 9.25446 10.4331 9.41074 10.5894C9.56702 10.7457 9.77899 10.8334 10 10.8334L12.5 10.8334C12.721 10.8334 12.933 10.7456 13.0893 10.5894L18.0893 5.58929C18.2455 5.433 18.3333 5.22104 18.3333 5.00003C18.3333 4.77901 18.2455 4.56705 18.0892 4.41077L15.5892 1.91082Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M5 9.16678C3.61929 9.16678 2.5 10.2861 2.5 11.6668C2.5 13.0475 3.61929 14.1668 5 14.1668H13.3333C13.7936 14.1668 14.1667 14.5399 14.1667 15.0001C14.1667 15.4603 13.7936 15.8334 13.3333 15.8334H10C9.53976 15.8334 9.16667 16.2065 9.16667 16.6668C9.16667 17.127 9.53976 17.5001 10 17.5001H13.3333C14.714 17.5001 15.8333 16.3808 15.8333 15.0001C15.8333 13.6194 14.714 12.5001 13.3333 12.5001H5C4.53976 12.5001 4.16667 12.127 4.16667 11.6668C4.16667 11.2065 4.53976 10.8334 5 10.8334H6.66667C7.1269 10.8334 7.5 10.4604 7.5 10.0001C7.5 9.53988 7.1269 9.16678 6.66667 9.16678H5Z"
//                     fill="#FF4B0E"
//                   ></path>
//                 </svg>
//               </div>
//               <div class="column-2x-small">
//                 <div class="label-regular">
//                   Identification of Financial Goals
//                 </div>
//                 <p class="paragraph-small text-color-secondary">
//                   In this initial stage, assess and identify your short-term and
//                   long-term financial.
//                 </p>
//               </div>
//               <div class="timeline-text">08 Feb, 2022</div>
//             </div>
//           </div>
//           <div class="w-layout-grid timeline-row-grid first">
//             <div
//               id="w-node-_5d2bff89-1a88-a8fd-89ae-5b657174804d-fd60769a"
//               class="timeline-card"
//             >
//               <div class="icon-small w-embed">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M2.5 5.41667C2.5 3.80584 3.80584 2.5 5.41667 2.5C7.0275 2.5 8.33333 3.80584 8.33333 5.41667V6.66667H11.6667V5.41667C11.6667 3.80584 12.9725 2.5 14.5833 2.5C16.1942 2.5 17.5 3.80584 17.5 5.41667C17.5 7.0275 16.1942 8.33333 14.5833 8.33333H13.3333V11.6667H14.5833C16.1942 11.6667 17.5 12.9725 17.5 14.5833C17.5 16.1942 16.1942 17.5 14.5833 17.5C12.9725 17.5 11.6667 16.1942 11.6667 14.5833V13.3333H8.33333V14.5833C8.33333 16.1942 7.0275 17.5 5.41667 17.5C3.80584 17.5 2.5 16.1942 2.5 14.5833C2.5 12.9725 3.80584 11.6667 5.41667 11.6667H6.66667V8.33333H5.41667C3.80584 8.33333 2.5 7.0275 2.5 5.41667ZM6.66667 6.66667V5.41667C6.66667 4.72631 6.10702 4.16667 5.41667 4.16667C4.72631 4.16667 4.16667 4.72631 4.16667 5.41667C4.16667 6.10702 4.72631 6.66667 5.41667 6.66667H6.66667ZM8.33333 8.33333V11.6667H11.6667V8.33333H8.33333ZM6.66667 13.3333H5.41667C4.72631 13.3333 4.16667 13.893 4.16667 14.5833C4.16667 15.2737 4.72631 15.8333 5.41667 15.8333C6.10702 15.8333 6.66667 15.2737 6.66667 14.5833V13.3333ZM13.3333 13.3333V14.5833C13.3333 15.2737 13.893 15.8333 14.5833 15.8333C15.2737 15.8333 15.8333 15.2737 15.8333 14.5833C15.8333 13.893 15.2737 13.3333 14.5833 13.3333H13.3333ZM13.3333 6.66667H14.5833C15.2737 6.66667 15.8333 6.10702 15.8333 5.41667C15.8333 4.72631 15.2737 4.16667 14.5833 4.16667C13.893 4.16667 13.3333 4.72631 13.3333 5.41667V6.66667Z"
//                     fill="#FF4B0E"
//                   ></path>
//                 </svg>
//               </div>
//               <div class="column-2x-small">
//                 <div class="label-regular">Budgeting and Expense Analysis</div>
//                 <p class="paragraph-small text-color-secondary">
//                   Develop a detailed budget outlining income, expenses, and
//                   savings targets.
//                 </p>
//               </div>
//               <div class="timeline-text">05 Feb, 2022</div>
//             </div>
//             <div
//               id="w-node-_5d2bff89-1a88-a8fd-89ae-5b6571748048-fd60769a"
//               class="timeline-line-wrapper"
//             >
//               <div class="timeline-line"></div>
//               <div class="timeline-dot">
//                 <div class="timeline-dot-small"></div>
//               </div>
//             </div>
//             <div
//               id="w-node-_5d2bff89-1a88-a8fd-89ae-5b6571748045-fd60769a"
//               class="timeline-text-wrapper"
//             >
//               <div class="paragraph-small text-color-secondary">
//                 05 Feb, 2023
//               </div>
//             </div>
//           </div>
//           <div class="w-layout-grid timeline-row-grid first">
//             <div
//               id="w-node-_1553e9c8-088a-63b1-f5a0-cb7171cf0428-fd60769a"
//               class="timeline-text-wrapper"
//             >
//               <div class="paragraph-small text-color-secondary">
//                 12 Jan, 2023
//               </div>
//             </div>
//             <div class="timeline-line-wrapper">
//               <div class="timeline-line"></div>
//               <div class="timeline-dot">
//                 <div class="timeline-dot-small"></div>
//               </div>
//             </div>
//             <div
//               id="w-node-_1553e9c8-088a-63b1-f5a0-cb7171cf0430-fd60769a"
//               class="timeline-card"
//             >
//               <div class="icon-small w-embed">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M5.83366 6.66659C5.83366 7.12682 5.46056 7.49992 5.00033 7.49992C4.54009 7.49992 4.16699 7.12682 4.16699 6.66659C4.16699 6.20635 4.54009 5.83325 5.00033 5.83325C5.46056 5.83325 5.83366 6.20635 5.83366 6.66659Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M8.33366 6.66659C8.33366 7.12682 7.96056 7.49992 7.50033 7.49992C7.04009 7.49992 6.66699 7.12682 6.66699 6.66659C6.66699 6.20635 7.04009 5.83325 7.50033 5.83325C7.96056 5.83325 8.33366 6.20635 8.33366 6.66659Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M10.0003 7.49992C10.4606 7.49992 10.8337 7.12682 10.8337 6.66659C10.8337 6.20635 10.4606 5.83325 10.0003 5.83325C9.54009 5.83325 9.16699 6.20635 9.16699 6.66659C9.16699 7.12682 9.54009 7.49992 10.0003 7.49992Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M1.66699 4.16659C1.66699 3.70635 2.04009 3.33325 2.50033 3.33325H17.5003C17.9606 3.33325 18.3337 3.70635 18.3337 4.16659V6.66659C18.3337 7.12682 17.9606 7.49992 17.5003 7.49992C17.0401 7.49992 16.667 7.12682 16.667 6.66659V4.99992H3.33366V14.9999H8.33366C8.7939 14.9999 9.16699 15.373 9.16699 15.8333C9.16699 16.2935 8.7939 16.6666 8.33366 16.6666H2.50033C2.04009 16.6666 1.66699 16.2935 1.66699 15.8333V4.16659Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M15.0003 9.16659C15.4606 9.16659 15.8337 9.53968 15.8337 9.99992C15.8337 11.0556 16.0684 11.6256 16.3882 11.9454C16.708 12.2652 17.278 12.4999 18.3337 12.4999C18.7939 12.4999 19.167 12.873 19.167 13.3333C19.167 13.7935 18.7939 14.1666 18.3337 14.1666C17.278 14.1666 16.708 14.4013 16.3882 14.7211C16.0684 15.0409 15.8337 15.6109 15.8337 16.6666C15.8337 17.1268 15.4606 17.4999 15.0003 17.4999C14.5401 17.4999 14.167 17.1268 14.167 16.6666C14.167 15.6109 13.9323 15.0409 13.6125 14.7211C13.2926 14.4013 12.7227 14.1666 11.667 14.1666C11.2068 14.1666 10.8337 13.7935 10.8337 13.3333C10.8337 12.873 11.2068 12.4999 11.667 12.4999C12.7227 12.4999 13.2926 12.2652 13.6125 11.9454C13.9323 11.6256 14.167 11.0556 14.167 9.99992C14.167 9.53968 14.5401 9.16659 15.0003 9.16659Z"
//                     fill="#FF4B0E"
//                   ></path>
//                 </svg>
//               </div>
//               <div class="column-2x-small">
//                 <div class="label-regular">Emergency Fund Establishment</div>
//                 <p class="paragraph-small text-color-secondary">
//                   Build a financial safety net by creating an emergency fund.
//                 </p>
//               </div>
//               <div class="timeline-text">12 Jan, 2021</div>
//             </div>
//           </div>
//           <div class="w-layout-grid timeline-row-grid first">
//             <div
//               id="w-node-_31c680a0-9597-60eb-259a-837417387b5b-fd60769a"
//               class="timeline-card"
//             >
//               <div class="icon-small w-embed">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M2.5 5.41667C2.5 3.80584 3.80584 2.5 5.41667 2.5C7.0275 2.5 8.33333 3.80584 8.33333 5.41667V6.66667H11.6667V5.41667C11.6667 3.80584 12.9725 2.5 14.5833 2.5C16.1942 2.5 17.5 3.80584 17.5 5.41667C17.5 7.0275 16.1942 8.33333 14.5833 8.33333H13.3333V11.6667H14.5833C16.1942 11.6667 17.5 12.9725 17.5 14.5833C17.5 16.1942 16.1942 17.5 14.5833 17.5C12.9725 17.5 11.6667 16.1942 11.6667 14.5833V13.3333H8.33333V14.5833C8.33333 16.1942 7.0275 17.5 5.41667 17.5C3.80584 17.5 2.5 16.1942 2.5 14.5833C2.5 12.9725 3.80584 11.6667 5.41667 11.6667H6.66667V8.33333H5.41667C3.80584 8.33333 2.5 7.0275 2.5 5.41667ZM6.66667 6.66667V5.41667C6.66667 4.72631 6.10702 4.16667 5.41667 4.16667C4.72631 4.16667 4.16667 4.72631 4.16667 5.41667C4.16667 6.10702 4.72631 6.66667 5.41667 6.66667H6.66667ZM8.33333 8.33333V11.6667H11.6667V8.33333H8.33333ZM6.66667 13.3333H5.41667C4.72631 13.3333 4.16667 13.893 4.16667 14.5833C4.16667 15.2737 4.72631 15.8333 5.41667 15.8333C6.10702 15.8333 6.66667 15.2737 6.66667 14.5833V13.3333ZM13.3333 13.3333V14.5833C13.3333 15.2737 13.893 15.8333 14.5833 15.8333C15.2737 15.8333 15.8333 15.2737 15.8333 14.5833C15.8333 13.893 15.2737 13.3333 14.5833 13.3333H13.3333ZM13.3333 6.66667H14.5833C15.2737 6.66667 15.8333 6.10702 15.8333 5.41667C15.8333 4.72631 15.2737 4.16667 14.5833 4.16667C13.893 4.16667 13.3333 4.72631 13.3333 5.41667V6.66667Z"
//                     fill="#FF4B0E"
//                   ></path>
//                 </svg>
//               </div>
//               <div class="column-2x-small">
//                 <div class="label-regular">Investment Strategy Development</div>
//                 <p class="paragraph-small text-color-secondary">
//                   Formulate a personalized investment strategy based on risk
//                   tolerance.
//                 </p>
//               </div>
//               <div class="timeline-text">02 Jan, 2021</div>
//             </div>
//             <div
//               id="w-node-_31c680a0-9597-60eb-259a-837417387b62-fd60769a"
//               class="timeline-line-wrapper"
//             >
//               <div class="timeline-line"></div>
//               <div class="timeline-dot">
//                 <div class="timeline-dot-small"></div>
//               </div>
//             </div>
//             <div
//               id="w-node-_31c680a0-9597-60eb-259a-837417387b66-fd60769a"
//               class="timeline-text-wrapper"
//             >
//               <div class="paragraph-small text-color-secondary">
//                 02 Jan, 2021
//               </div>
//             </div>
//           </div>
//           <div class="w-layout-grid timeline-row-grid first">
//             <div
//               id="w-node-cee94e20-8d02-d4da-0c95-60c28a9063d2-fd60769a"
//               class="timeline-text-wrapper"
//             >
//               <div class="paragraph-small text-color-secondary">
//                 12 Jan, 2020
//               </div>
//             </div>
//             <div class="timeline-line-wrapper">
//               <div class="timeline-bottom-line"></div>
//               <div class="timeline-line last"></div>
//               <div class="timeline-dot">
//                 <div class="timeline-dot-small"></div>
//               </div>
//             </div>
//             <div
//               id="w-node-cee94e20-8d02-d4da-0c95-60c28a9063da-fd60769a"
//               class="timeline-card"
//             >
//               <div class="icon-small w-embed">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M5.83366 6.66659C5.83366 7.12682 5.46056 7.49992 5.00033 7.49992C4.54009 7.49992 4.16699 7.12682 4.16699 6.66659C4.16699 6.20635 4.54009 5.83325 5.00033 5.83325C5.46056 5.83325 5.83366 6.20635 5.83366 6.66659Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M8.33366 6.66659C8.33366 7.12682 7.96056 7.49992 7.50033 7.49992C7.04009 7.49992 6.66699 7.12682 6.66699 6.66659C6.66699 6.20635 7.04009 5.83325 7.50033 5.83325C7.96056 5.83325 8.33366 6.20635 8.33366 6.66659Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M10.0003 7.49992C10.4606 7.49992 10.8337 7.12682 10.8337 6.66659C10.8337 6.20635 10.4606 5.83325 10.0003 5.83325C9.54009 5.83325 9.16699 6.20635 9.16699 6.66659C9.16699 7.12682 9.54009 7.49992 10.0003 7.49992Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M1.66699 4.16659C1.66699 3.70635 2.04009 3.33325 2.50033 3.33325H17.5003C17.9606 3.33325 18.3337 3.70635 18.3337 4.16659V6.66659C18.3337 7.12682 17.9606 7.49992 17.5003 7.49992C17.0401 7.49992 16.667 7.12682 16.667 6.66659V4.99992H3.33366V14.9999H8.33366C8.7939 14.9999 9.16699 15.373 9.16699 15.8333C9.16699 16.2935 8.7939 16.6666 8.33366 16.6666H2.50033C2.04009 16.6666 1.66699 16.2935 1.66699 15.8333V4.16659Z"
//                     fill="#FF4B0E"
//                   ></path>
//                   <path
//                     d="M15.0003 9.16659C15.4606 9.16659 15.8337 9.53968 15.8337 9.99992C15.8337 11.0556 16.0684 11.6256 16.3882 11.9454C16.708 12.2652 17.278 12.4999 18.3337 12.4999C18.7939 12.4999 19.167 12.873 19.167 13.3333C19.167 13.7935 18.7939 14.1666 18.3337 14.1666C17.278 14.1666 16.708 14.4013 16.3882 14.7211C16.0684 15.0409 15.8337 15.6109 15.8337 16.6666C15.8337 17.1268 15.4606 17.4999 15.0003 17.4999C14.5401 17.4999 14.167 17.1268 14.167 16.6666C14.167 15.6109 13.9323 15.0409 13.6125 14.7211C13.2926 14.4013 12.7227 14.1666 11.667 14.1666C11.2068 14.1666 10.8337 13.7935 10.8337 13.3333C10.8337 12.873 11.2068 12.4999 11.667 12.4999C12.7227 12.4999 13.2926 12.2652 13.6125 11.9454C13.9323 11.6256 14.167 11.0556 14.167 9.99992C14.167 9.53968 14.5401 9.16659 15.0003 9.16659Z"
//                     fill="#FF4B0E"
//                   ></path>
//                 </svg>
//               </div>
//               <div class="column-2x-small">
//                 <div class="label-regular">Debt Management Plan</div>
//                 <p class="paragraph-small text-color-secondary">
//                   Evaluate existing debts and develop a plan to manage and
//                   reduce them.
//                 </p>
//               </div>
//               <div class="timeline-text">12 Jan, 2020</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
