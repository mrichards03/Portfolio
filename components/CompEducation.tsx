'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {Card, CardHeader, CardBody} from '@nextui-org/card';

const CompEducation: React.FC = () => {
    return (
        <section id="education" className="flex flex-col px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="justify-center py-1 text-3xl font-bold leading-9 text-white whitespace-nowrap max-md:max-w-full">
                Education
            </h2>
            <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{
                width: "100%",
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: -50
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
                            University of British Columbia
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className="mb-0.5">Majors: <span className="font-medium">Computer Science and Pure Mathematics</span></p>
                        <p className="mb-0.5">Expected Graduation: <span className="font-medium">2026</span></p>
                        <p>GPA: <span className="font-medium">90% — 4.33/4.33</span></p>
                    </CardBody>
                    </Card>
            </motion.div>       
        </section>
              
    );
};

export default CompEducation;