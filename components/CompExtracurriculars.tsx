import * as React from "react";
import ExperienceBase from "./ExperienceBase";

const Extracurriculars = [
  {
    title: "Lead Software Developer",
    company: "HEAT Robotics",
    date: "Feb 2024 – PRESENT",
    description: `    
    <ul class="list-disc ml-4">
      <li>Lead Software Developer for HEAT Robotics, a team of 25, crafting an ember detection rover (EMBR) aimed at identifying and alerting firefighters to potentially dangerous underground hotspots. This innovative 2-month project is part of our entry in the Mass Robotics Form and Function Competition.</li>
      <li>Head of the Software division, managing a team of 7 students focusing on developing software for the EMBR's movement, sensor processing, data transmission, and UI.</li>
      <li>Organize and conduct weekly team meetings and weekend workshops to foster skills development and project progress.</li>
      <li>Responsible for task delegation, ensuring efficient workflow and meeting project milestones within the software team.</li>
      <li>Oversee the design, development, and implementation of software solutions, coordinating closely with Management, Mechanical, Manufacturing, and Electrical teams to achieve integrated system functionality.</li>
      <li>Interview experts in Robotics and Firefighting fields to ensure EMBR is built to the highest possible standard</li>
    </ul>
      `,
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
    title: "Squadron Commander",
    company: "Royal Canadian Air Cadets",
    date: "Sept 2016 – Dec 2022",
    description: 
    `
    <ul class="list-disc ml-4">
      <li>Acted as the squadron commander in charge of 60 cadets aged 12-18</li>
      <li>Planned, supervised, and managed squadron activities and operations.</li>
      <li>Taught instructional classes.</li>
      <li>Awarded: Cadet of the Year (2022), Training Officer's Award (2022), Lord Strathcona Medal (2021), Top Cadet Instructor (2021), Best Dressed Cadet (2021), Best Cadet Bandsmen (2018)</li>
    </ul>
    `,
    tags: ["Leadership", "Communication", "Time Managment"],
  },
]
const CompExtracurriculars: React.FC = () => {
    return(
      <div id="extracurriculars">
        <ExperienceBase header={"Extracurriculars"} experiences={Extracurriculars}/>
      </div>  
    );
};
export default CompExtracurriculars;