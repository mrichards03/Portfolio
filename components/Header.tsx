import * as React from "react";
import NavItem from "./NavItem";

const CompHeader: React.FC = () => {
  const navItems = [
    { name: "About Me", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Extracurriculars", id: "extracurriculars" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact Me", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background flex flex-col items-center px-3.5 pt-2 pb-4 text-base opacity-90">
      <header>
        <h1 className="justify-center text-4xl font-bold leading-10 text-center">
          MacKenzie Richards
        </h1>
        <p className="justify-center max-w-full leading-6 text-center text-gray-400 w-100">
          Software Developer, Computer Science & Pure Mathematics Student
        </p>
      </header>
      <nav>
        <ul className="flex justify-center items-center self-stretch px-16 mt-4 text-gray-300 leading-[150%] max-md:px-5 max-md:max-w-full max-md:flex-wrap gap-4">
          {navItems.map((item, index) => (
            <NavItem key={index} sectionId={item.id}>{item.name}</NavItem>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default CompHeader;