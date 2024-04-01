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
      title: "Discord Clone",
      description:
        "Discord Clone created with 4 other students for a Software Engineering Course.",
      tags: ["C#", "HTML", "CSS", "JavaScript", ".NET", "Entity Framework", "Blazor", "SQL", "Agile"],
      icon: <a href="https://github.com/Bawnorton/Bamboozlers" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>,
    },
    {
      title: "Resurrection Electronics Emporium",
      description:
        "Online ecommerce site written in JSP and JavaScript for a Introduction to Database course. Awarded Top Project out of 120 projects.",
      tags: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
      icon: <a href="https://github.com/mrichards03/Resurrection-Electronics-Emporium" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>,
    },
    {
      title: "RendezVous",
      description:
        "Tinder-like app for making teams for classes that require group work. Created in 2 days, with 2 other students, for BCHacks5",
      tags: ["Entity Framework", "CSS", "HTML", "C#", "Maui Blazor Hybrid", "SQL"],
      icon: <a href="https://github.com/mrichards03/hackathon" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>,
    },
    {
      title: "Portfolio",
      description:
        "This portfolio was created using Next.js and Tailwind CSS",
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
            <Item  key={project.title} title={project.title} description={project.description} tags={project.tags} index={index} subtitle={project.icon} />
          ))}
      </div>
    </section>
  );
};

export default CompProjects;