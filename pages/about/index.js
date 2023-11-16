import React, { useState } from 'react'

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




import Circles from '../../components/Circles';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Circles />
      {/* Avatar img */}
    </div>
  );
};

export default About;
