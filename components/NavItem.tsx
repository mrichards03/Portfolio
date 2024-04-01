'use client'
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
    <li className="cursor-pointer" onClick={handleClick}>
      {children}
    </li>
  );
};

export default NavItem;
