import React, { useState } from 'react'
import Image from 'next/image';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaEnvelope, // For email icon
  FaPhone, // For phone icon
  FaLinkedin, // For LinkedIn icon
  FaGithub, // For GitHub icon
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";




import Circles from '../../components/Circles';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-primary/60 h-full container mx-auto flex flex-col lg:flex-row items-center justify-center py-6">
      <Circles />
      {/* Image Section */}
      <div className="lg:w-1/3 px-4 mb-6 lg:mb-0">
        <Image 
          src="./avatar2.png" 
          alt="Profile Picture" 
          width={481}  // Adjust as needed
          height={820} // Adjust as needed
          className="rounded-full" // For rounded image
        />
      </div>
      {/* Avatar and Bio Section */}
      <div className="bio-section lg:w-1/3 px-4">
        <h2 className="text-2xl font-bold text-left">About Me</h2>
        <p className="text-left mt-4"> Im a passionate web developer with a focus on modern JavaScript technologies. I love creating interactive and dynamic user experiences.</p>
        <h3 className="text-xl font-semibold text-left mt-6">Contact Details</h3>
        <ul className="list-none mt-4">
          <li className="flex items-center mb-2"><FaEnvelope className="mr-2" /> email@example.com</li>
          <li className="flex items-center mb-2"><FaPhone className="mr-2" /> +123456789</li>
          <li className="flex items-center mb-2"><FaLinkedin className="mr-2" /> LinkedInProfile</li>
          <li className="flex items-center mb-2"><FaGithub className="mr-2" /> GitHubProfile</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
