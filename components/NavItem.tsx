'use client'
import { motion } from 'framer-motion';
import * as React from 'react';

interface NavItemProps {
  children: React.ReactNode;
  sectionId: string; // Use sectionId to identify the target
}

const NavItem: React.FC<NavItemProps> = ({ children, sectionId }) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;

      const offsetPosition = section.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.li className="cursor-pointer" onClick={handleClick} 
    whileHover={{ scale: 1.1 }}
    transition={{
      type: "spring",
      damping: 3,
      stiffness: 50,
      restDelta: 0.001
    }}>
      {children}
    </motion.li>
  );
};

export default NavItem;
