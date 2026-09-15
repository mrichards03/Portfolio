import * as React from "react";
import ExperienceBase from "./ExperienceBase";

const Extracurriculars = [
  {
    title: "Lead Software Developer - HEAT Robotics",
    subtitle: "Feb 2024 – May 2026",
    descriptionList:
    [
      "Led a 10-person software team developing EMBR, a hotspot-detection rover, architecting Python/ROS2 systems on a Linux Raspberry Pi to control hardware via I2C, UART, and SPI.",
      "Organized and conducted weekly team meetings and weekend workshops to foster skills development and project progress.",
      "Oversaw the design, development, and implementation of software solutions, coordinating closely with Management, Mechanical, Manufacturing, and Electrical teams to achieve integrated system functionality.",
      "Interviewed experts in Robotics and Firefighting fields to ensure EMBR is built to the highest possible standard",
      "Won the Audience Choice Award and placed 3rd at the MassRobotics Form & Function competition in both 2024 and 2025, outperforming teams from MIT, Stanford, and Cornell.",
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