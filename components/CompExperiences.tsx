import * as React from "react";
import ExperienceBase from "./ExperienceBase";

const Experiences = [
  {
    title: "Undergraduate Teaching Assistant - University of British Columbia",
    subtitle: "Sept 2023 – PRESENT",
    descriptionList:
    [
      "Conduct Differential Calculus labs, fostering an interactive learning environment that helps 120 students better understand the topics in the course, with 87% of students affirming that the labs significantly enhanced their comprehension of the content.",
      "Evaluate and grade assignments and exams, maintaining academic integrity and providing constructive feedback to support student learning and development.",
      "Attained a 91% average student satisfaction rating across four calculus labs, with 92% of students recognizing the presentation of material as exceptionally clear and beneficial.",
    ],
    tags: ["Teaching"],
  },
  {
    title: "Software Developer - Raptor Integration",
    subtitle: "Apr 2021 – Aug 2023",
    descriptionList:
    [
      "Used C#, HTML, CSS, JavaScript, Blazor, .NET, and Entity Framework for front-end development and database integration.",
      "Developed and improved databases and database structures using SQL.",
      "Collaborated in optimizing an algorithm for efficient log-sectioning, significantly improving its speed to prevent log-skipping and enhance operational efficiency.",
      "Participated in and led feature design meetings and feature reviews.",
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
