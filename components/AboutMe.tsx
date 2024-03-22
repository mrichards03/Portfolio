import * as React from "react";
import ContactIcons from "./ContactIcons";

const CompAboutMe = React.forwardRef((props, aboutRef) => {

  return (
    <div ref={aboutRef} id="about" className="px-9 pt-6 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start py-1 pr-8 mt-6 max-md:mt-10 max-md:max-w-full">
            <h2 className="justify-center text-3xl font-bold leading-9 text-white">About Me</h2>
            <p className="justify-center self-stretch mt-8 text-base leading-6 text-gray-400 max-md:max-w-full">
              I am an enthusiastic Software Developer and undergraduate student double majoring in Computer Science and Pure Mathematics. My journey in tech started at a young age and has been fueled by my curiosity and love for learning new things. My aim: to inspire, challenge, and contribute meaningfully to the world around me.
            </p>
            <ContactIcons/>
          </div>
        </section>
        <aside className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <div className="grow justify-center items-center px-16 pt-24 pb-20 text-3xl font-bold leading-9 text-white whitespace-nowrap border border-black border-solid max-md:px-5 max-md:mt-10">
            Photo
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CompAboutMe;