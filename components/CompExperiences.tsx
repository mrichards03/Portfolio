import * as React from "react";
import ExperienceBase from "./ExperienceBase";

const Experiences = [
  {
    title: "Software Developer - 4AG Robotics",
    subtitle: "May 2024 – PRESENT",
    descriptionList:
    [],
    tags: ["C++"],
  },
  {
    title: "Undergraduate Teaching Assistant - University of British Columbia",
    subtitle: "Sept 2023 – Apr 2024",
    descriptionList:
    [
      "Calculus Labs (Semester 1): Conducted Differential Calculus labs, assisting 120 students, with 87% affirming that the labs enhanced their comprehension. Achieved a 91% student satisfaction rating, with 92% recognizing the presentation of material as clear and beneficial.",
      "Statistics Labs (Semester 2): Taught Business Statistics labs, supporting 95 students, with 90% of students reporting that the labs improved their understanding of the material. 90% of students found the laboratory materials clear and well-presented.",
    ],
    tags: ["Teaching"],
  },
  {
    title: "Software Developer - Raptor Integration",
    subtitle: "Apr 2021 – Aug 2023",
    descriptionList:
    [
      "Developed front-end interfaces and integrated databases using C#, HTML, CSS, JavaScript, Blazor, .NET, and Entity Framework.",
      "Developed and improved databases and database structures using SQL.",
      "Collaborated in optimizing an algorithm for efficient log-sectioning, significantly improving its speed to prevent log-skipping and enhance operational efficiency.",
      "Led and participated in feature design meetings and feature reviews.",
      "Worked with a team to develop a new product, personally designing and implementing more than half of the user views myself.",
      "Modified existing software by correcting errors and upgrading interfaces for improved performance.",
      "Upgraded old software from asp.net to Blazor and Entity Framework",
    ], 
    tags: [
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      ".NET",
      "Entity Framework",
      "Blazor",
      "SQL",
      "GitHub",
    ],
  },
  {
    title: "Technology Workshop Instructor - Salmon Arm Innovation Center",
    subtitle: "Jun 2021 - Aug 2021",
    descriptionList:
    [
      "Designed and delivered engaging technology workshops tailored for seniors, covering a range of topics including Zoom, mobile device utilization, and online shopping.",
    ],
    tags: ["Teaching"],
  },
];

const items = Experiences.map((experience, index) => {
  return {
    index: index,
    title: experience.title,
    subtitle: experience.subtitle,
    descriptionList: experience.descriptionList,
    tags: experience.tags,
  };
});

const CompExperiences: React.FC = () => {
    return(
      <div id="experience">
        <ExperienceBase header={"Experiences"} experiences={items}/>  
      </div>
      
    );
};
export default CompExperiences;
