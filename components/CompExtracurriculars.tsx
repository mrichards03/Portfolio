import * as React from "react";
import ExperienceBase from "./ExperienceBase";

const Extracurriculars = [
  {
    title: "Lead Software Developer - HEAT Robotics",
    subtitle: "Feb 2024 – PRESENT",
    descriptionList:
    [
      "Lead Software Developer for HEAT Robotics, a team of 25, crafting an ember detection rover (EMBR) aimed at identifying and alerting firefighters to potentially dangerous underground hotspots. This innovative 2-month project is part of our entry in the Mass Robotics Form and Function Competition.",
      "Head of the Software division, managing a team of 7 students focusing on developing software for the EMBR's movement, sensor processing, data transmission, and UI.",
      "Organize and conduct weekly team meetings and weekend workshops to foster skills development and project progress.",
      "Responsible for task delegation, ensuring efficient workflow and meeting project milestones within the software team.",
      "Oversee the design, development, and implementation of software solutions, coordinating closely with Management, Mechanical, Manufacturing, and Electrical teams to achieve integrated system functionality.",
      "Interview experts in Robotics and Firefighting fields to ensure EMBR is built to the highest possible standard",
      "Awarded Audience Choice Award at the MassRobotics Form & Function 2024 Competition, outperforming teams from MIT, Stanford, Cornell, and others.",
    ],
    tags: [
      "ROS2",
      "Python",
      "Agile",
      "Leadership",
      "Communication",
      "Time Managment",
    ],
  },
  {
    title: "Squadron Commander - Royal Canadian Air Cadets",
    subtitle: "Sept 2016 – Dec 2022",
    descriptionList:
    [
      "Acted as the squadron commander in charge of 60 cadets aged 12-18",
      "Planned, supervised, and managed squadron activities and operations.",
      "Taught instructional classes.",
      "Awarded: Cadet of the Year (2022), Training Officer's Award (2022), Lord Strathcona Medal (2021), Top Cadet Instructor (2021), Best Dressed Cadet (2021), Best Cadet Bandsmen (2018)",
    ],
    tags: ["Leadership", "Communication", "Time Managment"],
  },
]

const items = Extracurriculars.map((experience, index) => {
  return {
    index: index,
    title: experience.title,
    subtitle: experience.subtitle,
    descriptionList: experience.descriptionList,
    tags: experience.tags,
  };
});

const CompExtracurriculars: React.FC = () => {
    return(
      <div id="extracurriculars">
        <ExperienceBase header={"Extracurriculars"} experiences={items}/>
      </div>  
    );
};
export default CompExtracurriculars;