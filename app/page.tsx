import CompAboutMe from "@/components/AboutMe";
import CompEducation from "@/components/CompEducation";
import CompExperiences from "@/components/CompExperiences"
import CompExtracurriculars from "@/components/CompExtracurriculars";
import ContactMe from "@/components/ContactMe";

import CompHeader from "@/components/Header";
import CompProjects from "@/components/Projects";
import * as React from "react";

export default function Home() {
  const aboutRef = React.useRef(null);
  return (
    <main className="bg-gray-900">      
      <header className="sticky top-0">
        <CompHeader/>
      </header>
      <CompAboutMe ref={aboutRef}/>
      <CompExperiences/>
      <CompExtracurriculars/>
      <CompEducation/>
      <CompProjects/>
      <ContactMe/>
      <footer className="flex justify-center items-center px-16 pt-11 pb-6 mt-16 w-full text-base leading-6 text-center text-gray-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <p>© 2024 MacKenzie Richards. All rights reserved.</p>
    </footer>
    </main>
  );
}
