import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';


// next iamge
import Image from "next/image";

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

import Head from 'next/head';


const Home = () => {
  return ( 
  <div className='bg-primary/60 h-full '>
    <Head>
      <title>Ampalo Roland</title>
      <link rel="icon" type="image/png" sizes="192x192" href="./favicon.png"/>
    </Head>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40
      xl:text-left h-full container mx-auto'>
        {/* title */}
        <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show"
        exit="hidden" className='h1 z-10 m-0 text-accent'>
          Ampalo <span className='text-white'> Roland </span>
        </motion.h1>
        {/* subtitle */}
        <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show"
        exit="hidden" className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 text-2xl xl:mb-5 z-10'>
          Hi, I am
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              '  3D Artist', // initially rendered starting point
              1000,
              '  Animator',
              1000,
              '  Vfx Enthusiast',
              1000,
              '  3D Sculptor',
              1000,
              '  Artist',
              500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.p>
        {/* btn */}

        {/* </motion.div> */}
        <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show"
        exit="hidden" className='flex justify-center xl:hidden relative'>
          <ProjectsBtn />
        </motion.div>
        <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show"
        exit="hidden" className="hidden xl:flex">
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1920px] h-[1080px] absolute right-0 bottom-0'>
      {/* bg video */}
      <video 
        className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 z-0 pointer-events-none' 
        autoPlay 
        muted 
        loop 
        src="./bg-explosion-2.mp4">
        Your browser does not support the video tag.
      </video>
      {/* particles */}
      <ParticlesContainer />
      <div>
        <Avatar />
      </div>
    </div>
  </div>
  );
};

export default Home;
