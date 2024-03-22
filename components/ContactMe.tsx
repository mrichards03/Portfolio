import * as React from "react";
import ContactIcons from "./ContactIcons";


const ContactMe: React.FC = () => (
  <section id="contact" className="flex flex-col px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <h2 className="justify-center items-center px-16 py-2 text-3xl font-bold leading-9 text-center text-white max-md:px-5 max-md:max-w-full">
      Contact Me
    </h2>
    <p className="justify-center items-center px-16 py-1 mt-6 text-base leading-6 text-center text-gray-400 max-md:px-5 max-md:max-w-full">
      Feel free to reach out to me through my social profiles or send me an email.
    </p>
    <ContactIcons/>
  </section>
);

export default ContactMe;
