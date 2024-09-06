import * as React from "react";
import ExperienceBase from "./ExperienceBase";

const Experiences = [
  {
    title: "Software Developer - 4AG Robotics",
    subtitle: "May 2024 – Aug 2024",
    descriptionList:
    ["Developed and deployed C++ components in Docker containers for a mushroom-picking robot, utilizing OpenCV for image processing and Gazebo messaging for cross-component communication.",
      "Developed an image depth analysis algorithm that ensured the even distribution of mushrooms in the product box by creating a grid of depths and interfacing with the PLC.",
      "Collaborated with a colleague to test and enhance a tool tray analysis component using vector mathematics and OpenCV to determine tool slot occupancy.",
      "Optimized component configuration by modifying the docker images to contain default configuration files and implementing JSON merging on startup, reducing host-side config files from 30 to 2, streamlining deployment processes.",
      "Researched and presented Kafka messaging solutions, contributing to the decision to implement Kafka in future software systems."
    ],
    tags: ["C++", "Docker", "OpenCV", "Gazebo Messaging", "Kafka", "GitLab"],
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
