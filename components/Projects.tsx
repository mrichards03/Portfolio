import * as React from "react";
import { FaGithub } from "react-icons/fa";
import Item, { ItemProps } from "./Item";


interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <div className="shrink-0 w-8 aspect-square">{icon}</div>
);

const CompProjects: React.FC = () => {
  const projects = [
    {
      title: "Documentation Repository",
      description:
        [ 
          "A GitHub repository containing documentation I have written for various projects",
          "Contains a detailed document explaining my FPGA design process for the KR260. I created this document after realizing there was no clear, beginner-friendly explanation of how to use the inputs on the board and why FPGA design was needed.", 
        ],
      tags: ["Technical Documentation"],
      icon: <a href="https://github.com/mrichards03/Documentation" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>,
    },
    {
      title: "Discord Clone",
      description:
        [ 
          "Created with 4 other students in C# and Blazor while following Agile Methodology for a Software Engineering Course.",
          "Built secure authentication including email verification and password hashing.",
          "Used Entity Framework for integration with SQL Server database.",
          "Includes front and backend unit testing with xunit, bunit, and playwright.", 
        ],
      tags: ["C#", "HTML", "CSS", "JavaScript", ".NET", "Entity Framework", "Blazor", "SQL", "Agile"],
      icon: <a href="https://github.com/Bawnorton/Bamboozlers" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>,
    },
    {
      title: "Resurrection Electronics Emporium",
      description:
        [
          "Online ecommerce site written in JSP and JavaScript for a Introduction to Database course.",
          "Awarded Top Project out of 120 projects.",
        ],
      tags: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
      icon: <a href="https://github.com/mrichards03/Resurrection-Electronics-Emporium" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>,
    },
    {
      title: "RendezVous",
      description:
        [
          ".NET MAUI Blazor app for making teams for classes that require group work.",
          "Used Entity Framework for integration with SQL Server database hosted on DigitalOcean.", 
          "Created in 2 days, with 2 other students, for BCHacks5",
        ],
      tags: ["Entity Framework", "CSS", "HTML", "C#", "Maui Blazor Hybrid", "SQL"],
      icon: <a href="https://github.com/mrichards03/hackathon" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>,
    },
    {
      title: "Portfolio",
      description:
        ["This portfolio was created using Next.js and Tailwind CSS"],
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
      icon: <a href="https://github.com/mrichards03/Portfolio" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>,
    },
  ];

  return (
    <section id="projects" className="flex flex-col px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="justify-center py-1 text-3xl font-bold leading-9 text-white whitespace-nowrap max-md:max-w-full">
          Projects
      </h2>
      <div className="grid grid-cols-2 gap-6 justify-between mt-3 w-full leading-[150%] max-md:flex-wrap max-md:max-w-full">
          {projects.map((project, index) => (
            <Item  key={project.title} title={project.title} descriptionList={project.description} tags={project.tags} index={index} subtitle={project.icon} />
          ))}
      </div>
    </section>
  );
};

export default CompProjects;