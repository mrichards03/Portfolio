'use client'
import CompAboutMe from "@/components/AboutMe";
import CompEducation from '@/components/CompEducation';
import CompExperiences from '@/components/CompExperiences';
import CompExtracurriculars from '@/components/CompExtracurriculars';
import ContactMe from '@/components/ContactMe';
import CompHeader from '@/components/Header';
import CompProjects from '@/components/Projects';
import { motion, useMotionTemplate, useMotionValue, useScroll } from "framer-motion";
import { MouseEvent } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
    return (
      <div
      className="group relative bg-background"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-50"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
    <main className='grid'>
        <CompHeader />        
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="w-3/4 justify-self-center">
        <CompAboutMe/>
        <CompExperiences/>
        <CompExtracurriculars/>
        <CompEducation/>
        <CompProjects/>
        <ContactMe/>
        <footer className="flex justify-center items-center px-16 pt-11 pb-6 mt-16 w-full text-base leading-6 text-center text-gray-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <p>© 2024 MacKenzie Richards. All rights reserved.</p>
        </footer>
      </div>
      
    </main>
    </div>
  );
}
