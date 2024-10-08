'use client'

import React from 'react';
import {Tabs, Tab} from "@nextui-org/tabs";
import Item from './Item';

interface ItemProps {
    title?: string;
    subtitle?: string;
    description?: string;
    empty?: boolean;
}

interface CoursesProps {
    title: String;
    courses: ItemProps[];
}

  
const Awards: React.FC = () => {
    const awards: ItemProps[] = [      
      {
        title: "Cmolik Undergraduate Scholarship",
        subtitle: "2021-2026",
        description:
          "One of the 20 recipients in 2021 to receive the $45,000 Cmolik scholarship. The Scholarship is geared towards students who have faced adversity but have responded with positivity and tenacity, achieving academic and social goals.",
      },
      {
        title: "Mastercard Scholarship for Women in Computer Science",
        subtitle: "2021-2026",
        description:
          "One of four students to receive Mastercard's Scholarship for Women in Computer Science, a renewing scholarship approximately covering the cost of tuition.",
      },
      {
        title: "Deputy Vice-Chancellor Scholarship for Continuing Students",
        subtitle: "2021-2024",
        description:
          "A $1000 scholarship awarded to the top 10% of continuing domestic students.",
      },
      {
        title: "Dean's List",
        subtitle: "2021-2024",
        description:
          "Awarded to students a sessional average of at least 85% while earning 24 or more credits",
      },
      {
        title: "Morris Bursary for Excellence in Mathematics",
        subtitle: "2021",
        description:
          "A $1600 bursary awarded to one female student a year, graduating from Salmon Arm Secondary School, demonstrating academic excellence in mathematics and pursuing post-secondary studies in mathematics or a related field.",
      },
    ];
  
    return (
      <section className="flex flex-col px-4 py-4 mt-1.5 text-base max-md:max-w-full">
        <h2 className="justify-center py-2 text-lg font-bold leading-7 text-white whitespace-nowrap max-md:max-w-full">
          Awards
        </h2>
        {awards.map((award, index) => (
          <Item index={index} key={award.title} title={award.title || ''} subtitle={award.subtitle} description={award.description} empty={award.empty} />
        ))}
      </section>
    );
};

  
const csCourses : ItemProps[] = [
  { title: "Software Engineering", subtitle: "95%" },
  { title: "Human Computer Interaction", subtitle: "87%"},
  { title: "Introduction to Databases", subtitle: "100%" },
  { title: "Data Structures", subtitle: "93%" },
  { title: "Machine Architecture", subtitle: "97%" },
  { title: "Computer Programming II", subtitle: "91%" },
  { title: "Computer Programming I", subtitle: "94%" },
  { empty: true},
  { empty: true}
];
const MCourses: ItemProps[] = [
  {
    title: "Complex Variables and Applications",
    subtitle: "92%",
  },
  {
    title: "Analysis I",
    subtitle: "88%",
  },
  {
    title: "Abstract Algebra I",
    subtitle: "86%",
  },
  {
    title: "Introduction to Differential Equations",
    subtitle: "87%",
  },
  {
    title: "Mathematical Proof",
    subtitle: "88%",
  },
  {
    title: "Calculus III",
    subtitle: "78%",
  },
  {
    title: "Matrix Algebra",
    subtitle: "90%",
  },
  {
    title: "Integral Calculus with Applications to Physical Sciences and Engineering",
    subtitle: "97%",
  },
  {
    title: "Differential Calculus with Applications to Physical Sciences and Engineering",
    subtitle: "97%",
  },
];
const Courses: React.FC<CoursesProps> = ({
    title,
    courses
  }) => {
    return (
      <section className="flex flex-row flex-wrap gap-0 justify-between px-4 py-4 mt-1.5 text-base max-md:max-w-full">
        <h2 className="justify-center py-1.5 text-lg font-bold leading-7 text-white max-md:max-w-full">
           {title}
        </h2>
        <div className="flex gap-5 justify-between mt-3 w-full leading-[150%] max-md:flex-wrap max-md:max-w-full">
          {courses.slice(0, 3).map((course, index) => (
            <Item key={index} title={course.title || ''} subtitle={course.subtitle} index={index} empty={course.empty}/>
          ))}
        </div>
        <div className="flex gap-5 justify-between mt-3 w-full leading-[150%] max-md:flex-wrap max-md:max-w-full">
          {courses.slice(3, 6).map((course, index) => (
            <Item key={index} title={course.title || ''} subtitle={course.subtitle} index={index} empty={course.empty}/>
          ))}
        </div>
        <div className="flex gap-5 justify-between mt-3 w-full leading-[150%] max-md:flex-wrap max-md:max-w-full">
          {courses.slice(6, 9).map((course, index) => (
            <Item key={index} title={course.title || ''} subtitle={course.subtitle} index={index} empty={course.empty}/>
          ))}
        </div>
      </section>
    );
};

const CompEducation: React.FC = () => {
    return (
        <section id="education" className="flex flex-col px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="justify-center py-1 text-3xl font-bold leading-9 text-white whitespace-nowrap max-md:max-w-full">
                Education
            </h2>
                <div className="flex w-full flex-col">
                <Tabs aria-label='Options'>
                        <Tab key="awards" title="Awards">
                              <Awards />
                        </Tab>
                        <Tab key="csCourses" title="Computer Science Courses">
                            <Courses title={"Computer Science Courses"} courses={csCourses}/>
                        </Tab>
                        <Tab key="mathCourses" title="Math Courses">
                            <Courses title={"Math Courses"} courses={MCourses}/>
                        </Tab>
                </Tabs>
            </div>            
        </section>
              
    );
};

export default CompEducation;