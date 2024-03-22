import * as React from 'react';

export interface ItemProps {
    title: string;
    company: string;
    date: string;
    description: string;
    tags: string[];
  }

const Item: React.FC<ItemProps> = ({
    title,
    company,
    date,
    description,
    tags,
  }) => {
    return (
      <div className="flex flex-col py-2.5 pr-6 mt-4 pl-4 bg-gray-800 rounded-lg max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between py-1 pr-5 -ml-1 max-md:flex-wrap max-md:max-w-full">
          <div className="justify-center text-xl font-semibold leading-7 text-white max-md:max-w-full">
            {title} - {company}
          </div>
          <div className="justify-center self-start mt-2 text-sm leading-5 text-gray-500">
            {date}
          </div>
        </div>
        <div
          className="mt-5 text-base leading-6 text-gray-400 max-md:max-w-full"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex gap-5 mt-6 text-xs leading-4 text-center text-white max-md:flex-wrap">
          {tags.map((tag) => (
            <div
              key={tag}
              className="justify-center px-5 py-2 whitespace-nowrap bg-blue-600 rounded"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default Item