import * as React from 'react';
import {Card, CardHeader, CardBody} from '@nextui-org/card';

export interface ItemProps {
    [x: string]: any;
    title: string;
    subtitle?: any;
    description: string;
    tags: string[];
  }

const Item: React.FC<ItemProps> = ({
    title,
    subtitle,
    description,
    tags
  }) => {
    return (
      <Card className="mt-4 p-2">
        <CardHeader className='justify-between'>
          <div className="justify-center text-xl font-semibold leading-7 text-white max-md:max-w-full">
            {title}
          </div>
          <div className="justify-center self-start mt-2 text-sm leading-5 text-gray-500">
            {subtitle}
          </div>
        </CardHeader>
        <CardBody>
          <div
            className="mt-5 text-base leading-6 text-gray-400 max-md:max-w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex flex-wrap gap-5 mt-6 text-xs leading-4 text-center text-white max-md:flex-wrap">
            {tags.map((tag) => (
              <div
                key={tag}
                className="justify-center px-5 py-2 whitespace-nowrap bg-blue-600 rounded"
              >
                {tag}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  };
  export default Item