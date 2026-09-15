import * as React from "react";
import ContactIcons from "./ContactIcons";
import { Card, CardBody } from "@nextui-org/card";

const CompAboutMe: React.FC = () => {
  return (
    <div id="about" className="px-9 pt-6 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start py-1 pr-8 mt-6 max-md:mt-10 max-md:max-w-full">
            <h2 className="justify-center text-3xl font-bold leading-9 text-white">About Me</h2>

            <Card className="mt-4 p-2">
              <CardBody>
                  I am a software engineer with an Honours double major in 
                  Computer Science and Pure Mathematics from The University of British Columbia. My work sits at the intersection of 
                  low-level software and physical hardware, specializing in robotics, embedded systems, 
                  and firmware engineering. From building C++ computer vision software for commercial 
                  harvesting robots to leading a 10-person team developing an award-winning wildfire rover 
                  and co-authoring research on ultra-lightweight embedded databases, I thrive on steep 
                  learning curves and building reliable solutions for complex, resource-constrained environments.
              </CardBody>
            </Card>
            <ContactIcons/>    
          </div>
        </section>
        <aside className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full justify-center">
          <img src="/profile.jpg" alt="MacKenzie Richards" className="rounded-3xl"/>
        </aside>
      </div>
    </div>
  );
};

export default CompAboutMe;