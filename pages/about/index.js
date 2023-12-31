import React from 'react';
import Image from 'next/image';

// Icons
import {
 FaEnvelope,
 FaPhone,
 FaMap,
 FaGlobe,
} from "react-icons/fa";

import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

// SkillBar component for displaying skills
const SkillBar = ({ skill, level }) => (
 <div className="mb-6">
  <div className="text-lg font-medium text-left">{skill}</div>
  <div className="mt-2 w-full bg-gray-200 rounded-full h-4">
   <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${level}%` }}></div>
  </div>
 </div>
);

const About = () => {
 const skills = [
  { name: 'Programmer', level: 90 },
  { name: '3D Artist', level: 85 },
  { name: 'Web Developer', level: 80 },
  { name: 'Cook', level: 75 },
  { name: 'Artist', level: 70 },
 ];

 return (
  <div className="container mx-auto py-6 h-full">
   <div className="flex flex-col lg:flex-row justify-around items-center h-full">
    {/* Bio Section */}
    <motion.div variants={fadeIn('down', 0.2)} initial="hidden" animate="show"
    exit="hidden" className="lg:w-1/4 px-4 mx-auto">
     <h2 className="text-3xl font-bold">About Me</h2>
     <p className="mt-4 text-xl">Im a passionate web developer with a focus on modern JavaScript technologies. I love creating interactive and dynamic user experiences.</p>
     <h3 className="text-3xl font-semibold mt-6">Contact Details</h3>
     <ul className="list-none mt-4">
      <li className="flex items-center justify-start mb-2"><FaEnvelope className="mr-2" /> rolandampalo5822@gmail.com</li>
      <li className="flex items-center justify-start mb-2"><FaPhone className="mr-2" /> +639294114330</li>
      <li className="flex items-center justify-start mb-2"><FaMap className="mr-2" /> Crystal Cave, Bakakeng Central</li>
      <li className="flex items-center justify-start mb-2"><FaGlobe className="mr-2" /> https://rol4nd58220.github.io/</li>
     </ul>
    </motion.div>

    {/* Image Section */}
    <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show"
    exit="hidden" transition={{duration: 1, ease: 'easeInOut'}} className="lg:w-1/4 px-4 flex justify-center mx-auto">
     <Image 
      src="/avatar2.png" 
      alt="Profile Picture" 
      width={1200}
      height={1200}
      className="rounded-full"
     />
    </motion.div>

    {/* Skills Section */}
    <motion.div variants={fadeIn('down', 0.2)} initial="hidden" animate="show"
    exit="hidden"className="skills-section lg:w-1/4 px-4 text-center mx-auto">
     <h3 className="text-3xl font-bold mb-2">My Skills</h3>
     {skills.map((skill, index) => (
      <SkillBar key={index} skill={skill.name} level={skill.level} />
     ))}
    </motion.div>
   </div>
  </div>
 );
};

export default About;
