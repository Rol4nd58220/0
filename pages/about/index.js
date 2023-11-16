import Image from 'next/image';
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
// const aboutData = [
//   {
//     title: 'skills',
//     info: [
//       {
//         title: 'Web Development',
//         icons: [
//           <FaHtml5 />,
//           <FaCss3 />,
//           <FaJs />,
//           <FaReact />,
//           <SiNextdotjs />,
//           <SiFramer />,
//           <FaWordpress />,
//         ],
//       },
//       {
//         title: 'UI/UX Design',
//         icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
//       },
//     ],
//   },
//   {
//     title: 'awards',
//     info: [
//       {
//         title: 'Webby Awards - Honoree',
//         stage: '2011 - 2012',
//       },
//       {
//         title: 'Adobe Design Achievement Awards - Finalist',
//         stage: '2009 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'experience',
//     info: [
//       {
//         title: 'UX/UI Designer - XYZ Company',
//         stage: '2012 - 2023',
//       },
//       {
//         title: 'Web Developer - ABC Agency',
//         stage: '2010 - 2012',
//       },
//       {
//         title: 'Intern - DEF Corporation',
//         stage: '2008 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'credentials',
//     info: [
//       {
//         title: 'Web Development - ABC University, LA, CA',
//         stage: '2011',
//       },
//       {
//         title: 'Computer Science Diploma - AV Technical Institute',
//         stage: '2009',
//       },
//       {
//         title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
//         stage: '2006',
//       },
//     ],
//   },
// ];

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <img src='./avatar2.png' alt="Avatar" className='hidden xl:flex absolute bottom- 0 left-[370px]' />
      {/* Rest of your component */}
    </div>
  );
};

export default About;
