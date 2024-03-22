import * as React from "react";
import ExperienceBase from "./ExperienceBase";

const Experiences = [
  {
    title: "Undergraduate Teaching Assistant",
    company: "University of British Columbia",
    date: "Sept 2023 – PRESENT",
    description: `
    <ul class="list-disc ml-4">
      <li>Conduct Differential Calculus labs, fostering an interactive learning environment that helps 120 students better understand the topics in the course, with 87% of students affirming that the labs significantly enhanced their comprehension of the content.</li>
      <li>Evaluate and grade assignments and exams, maintaining academic integrity and providing constructive feedback to support student learning and development.</li>
      <li>Attained a 91% average student satisfaction rating across four calculus labs, with 92% of students recognizing the presentation of material as exceptionally clear and beneficial.</li>
    </ul>`,
    tags: ["Teaching"],
  },
  {
    title: "Software Developer",
    company: "Raptor Integration",
    date: "Apr 2021 – Aug 2023",
    description: 
    `<ul class="list-disc ml-4">
      <li>Used C#, HTML, CSS, JavaScript, Blazor, .NET, and Entity Framework for front-end development and database integration.</li>
      <li>Developed and improved databases and database structures using SQL.</li>
      <li>Collaborated in optimizing an algorithm for efficient log-sectioning, significantly improving its speed to prevent log-skipping and enhance operational efficiency.</li>
      <li>Participated in and led feature design meetings and feature reviews.</li>
      <li>Worked with a team to develop a new product, personally designing and implementing more than half of the user views myself.</li>
      <li>Modified existing software by correcting errors and upgrading interfaces for improved performance.</li>
      <li>Upgraded old software from asp.net to Blazor and Entity Framework</li>
    </ul>`,
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
    title: "Technology Workshop Instructor",
    company: "Salmon Arm Innovation Center",
    date: "Jun 2021 - Aug 2021",
    description: `
    <ul class="list-disc ml-4">
      <li>Designed and delivered engaging technology workshops tailored for seniors, covering a range of topics including Zoom, mobile device utilization, and online shopping.</li>
    </ul>`,
    tags: ["Teaching"],
  },
];

const CompExperiences: React.FC = () => {
    return(
      <div id="experience">
        <ExperienceBase header={"Experiences"} experiences={Experiences}/>  
      </div>
      
    );
};
export default CompExperiences;
