import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import * as React from "react";

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <span className="shrink-0 w-8 aspect-square">{icon}</span>
);

const ContactIcons: React.FC = () => (    
      <div className="flex justify-center items-center mt-6 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between">
          <a href="https://github.com/mrichards03" target="_blank"><SocialIcon icon={<FaGithub size={32} />} /></a>
          <a href="https://www.linkedin.com/in/mackenzie-richards-484043212" target="_blank"><SocialIcon icon={<FaLinkedin size={32} />} /></a>
          <a href="mailto: richardsmackenzie3@gmail.com" target="_blank"><SocialIcon icon={<MdEmail size={32} />} /></a>
        </div>
      </div>
  );
  
  export default ContactIcons;