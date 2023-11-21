

import ServiceSlider from '../../components/ServiceSlider';
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="bg-primary/60 h-full py-36 flex items-center ">
      <Circles />
      <div className="container mx-auto"></div>
      <Bulb />
    </div>
  );
};

export default Services;