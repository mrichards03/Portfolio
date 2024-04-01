import * as React from "react";
import { FaGithub } from "react-icons/fa";
import Item, { ItemProps } from "./Item";


interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <div className="shrink-0 w-8 aspect-square">{icon}</div>
);

const ProjectCard: React.FC<ItemProps> = ({ title, description, tags}) => {
  if (!title && !description && !tags) {
    return <div className="px-4 w-full"></div>;
  }
  return (
    <Item key={title} title={title} subtitle={<SocialIcon icon={<FaGithub size={32} />} />} description={description} tags={tags} />
    
  );
};

const CompProjects: React.FC = () => {
  const projects: ItemProps[] = [
    {
      title: "Discord Clone",
      description:
        "Discord Clone created with 4 other students for a Software Engineering Course.",
      tags: ["C#", "HTML", "CSS", "JavaScript", ".NET", "Entity Framework", "Blazor", "SQL", "Agile"],
    },
    {
      title: "Resurrection Electronics Emporium",
      description:
        "Online ecommerce site written in JSP and JavaScript for a Introduction to Database course. Awarded Top Project out of 120 projects.",
      tags: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "RendezVous",
      description:
        "Tinder-like app for making teams for classes that require group work. Created in 2 days, with 2 other students, for BCHacks5",
      tags: ["Entity Framework", "CSS", "HTML", "C#", "Maui Blazor Hybrid", "SQL"],
    }
  ];

  return (
    <section id="projects" className="flex flex-col px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="justify-center py-1 text-3xl font-bold leading-9 text-white whitespace-nowrap max-md:max-w-full">
          Projects
      </h2>
      <div className="grid grid-cols-2 gap-6 justify-between mt-3 w-full leading-[150%] max-md:flex-wrap max-md:max-w-full">
          {projects.map((project) => (
            <ProjectCard  key={project.title} title={project.title} description={project.description} tags={project.tags} />
          ))}
      </div>
    </section>
  );
};

export default CompProjects;