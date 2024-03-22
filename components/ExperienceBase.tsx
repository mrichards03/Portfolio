import * as React from "react";
import Item from './Item';
import type { ItemProps } from './Item';

interface ExperienceProps {
  header: string;
  experiences: ItemProps[];
}

const ExperienceBase: React.FC<ExperienceProps> = ({
  header,
  experiences
}) => {
  return (
    <section className="flex flex-col px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="justify-center py-1 text-3xl font-bold leading-9 text-white whitespace-nowrap max-md:max-w-full">
        {header}
      </h2>
      <div className="flex flex-col justify-center mt-2 max-md:max-w-full">
        {experiences.map((experience) => (
          <Item key={experience.title} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceBase;
