import * as React from 'react';
import {Card, CardHeader, CardBody} from '@nextui-org/card';
import { motion } from 'framer-motion';

export interface ItemProps {
    index: number;
    title: string;
    subtitle?: any;
    description?: string;
    descriptionList?: string[];
    tags?: string[];
    empty?: boolean;
  }

const Item: React.FC<ItemProps> = ({
    index,
    title,
    subtitle,
    description,
    descriptionList,
    tags,
    empty
  }) => {
    if(empty == true){
      return (<div className='w-full'></div>);
    }
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{
          width: "100%",
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 50 : -50
        }}
        whileInView={{
          width: "100%",
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1 // Animation duration
          }
        }}
        viewport={{ once: false }}>
          <Card className="mt-4 p-2 h-full">
              <CardHeader className='justify-between'>
                <div className="justify-center text-xl font-semibold leading-7 text-white max-md:max-w-full">
                  {title}
                </div>
                <div className="justify-center self-start mt-2 text-sm leading-5 text-gray-500">
                  {subtitle}
                </div>
              </CardHeader>
              <CardBody>
                <div className="mt-5 text-base leading-6 text-gray-400 max-md:max-w-full">
                  {description && description}
                  {descriptionList && (
                    <ul className='list-disc ml-4'>
                      {descriptionList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex flex-wrap gap-5 mt-6 text-xs leading-4 text-center text-white max-md:flex-wrap">
                  {tags?.map((tag) => (
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
      </motion.div>
      
    );
  };
  export default Item