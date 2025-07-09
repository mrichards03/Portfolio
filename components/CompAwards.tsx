'use client'

import React from 'react';
import Item from './Item';

interface ItemProps {
    title?: string;
    subtitle?: string;
    description?: string;
    empty?: boolean;
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
        title: "Dean's Scholar",
        subtitle: "2025",
        description: "Awarded to students with a sessional average of at least 90% while earning 24 or more credits"
      },
      {
        title: "Dean's List",
        subtitle: "2021-2024",
        description:
          "Awarded to students with a sessional average of at least 85% while earning 24 or more credits",
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
        {awards.map((award, index) => (
          <Item index={index} key={award.title} title={award.title || ''} subtitle={award.subtitle} description={award.description} empty={award.empty} />
        ))}
      </section>
    );
};

const CompAwards: React.FC = () => {
    return (
        <section id="awards" className="flex flex-col px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="justify-center py-1 text-3xl font-bold leading-9 text-white whitespace-nowrap max-md:max-w-full">
                Awards and Scholarships
            </h2>
            <Awards />        
        </section>
              
    );
};

export default CompAwards;