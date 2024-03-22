import * as React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <div className="shrink-0 w-8 aspect-square">{icon}</div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags}) => {
  if (!title && !description && !tags) {
    return <div className="px-4 w-full"></div>;
  }
  return (
    <article className="flex flex-col py-3 pr-6 pl-6 text-white bg-gray-800 rounded-lg grow-0 w-full max-md:pl-5 max-md:mt-5 max-md:max-w-full">
      <header className="flex gap-5 justify-between text-xl font-semibold leading-7 max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
        <h3 className="justify-center my-auto">{title}</h3>
        <SocialIcon icon={<FaGithub size={32} />} />
      </header>
      <p className="justify-center mt-2 text-base leading-6 text-gray-400 max-md:max-w-full">{description}</p>
      <div className="flex flex-col flex-wrap content-start py-1 mt-7 text-xs leading-4 text-center max-md:max-w-full">
        <div className="flex gap-4 whitespace-wrap flex-wrap max-md:pr-5 max-md:max-w-full">
          {tags.map((tag) => (
            <div key={tag} className="justify-center items-start px-8 py-2 bg-blue-600 rounded max-md:px-5 w-max">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

const CompProjects: React.FC = () => {
  const projects = [
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
    },
    {},
  ];

  return (
    <section id="projects" className="flex flex-col px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="justify-center py-1 text-3xl font-bold leading-9 text-white whitespace-nowrap max-md:max-w-full">
          Projects
      </h2>
      <div className="grid grid-cols-2 gap-6 justify-between mt-3 w-full leading-[150%] max-md:flex-wrap max-md:max-w-full">
          {projects.map((project) => (
            <ProjectCard title={project.title} description={project.description} tags={project.tags} />
          ))}
      </div>
    </section>
  );
};

export default CompProjects;