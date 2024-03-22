'use client'
import * as React from 'react';

interface NavItemProps {
  children: React.ReactNode;
  sectionId: string; // Use sectionId to identify the target
}

const NavItem: React.FC<NavItemProps> = ({ children, sectionId }) => {
  // Use useEffect to attach the event listener
  React.useEffect(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const handleClick = () => {
      element.scrollIntoView({ behavior: 'smooth' });
    };

    element.addEventListener('click', handleClick);

    // Cleanup
    return () => element.removeEventListener('click', handleClick);
  }, [sectionId]);

  return (
    <li className="justify-center py-1.5 whitespace-nowrap cursor-pointer">
      {children}
    </li>
  );
};

export default NavItem;
