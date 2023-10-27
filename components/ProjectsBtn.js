// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import {HiArrowRight} from 'react-icons/hi2';

const ProjectsBtn = () => {
  return <div className='mx-auto xl:mx-0 z-10'>
    <Link href={'./about'} className="w-40 px-5 py-2 uppercase rounded-md text-sm font-semibold text-white text-opacity-80 bg-transparent border border-white border-opacity-80 transition-transform duration-500 ease-in-out select-none hover:text-opacity-100 hover:bg-blue-500 hover:border-blue-500 hover:text-shadow-lg z-10"
              id="btn"
          >
              Button
    </Link>
    {/* <Link href={'./about'} className='relative w-[185px] h-[185px] flex justify-center items-center
    bg-circleStar bg-cover bg-center bg-no-repeat group'>
      <Image 
        src={'./rounded-text.jpg'} 
        width={141}  
        height={148} 
        alt='' 
        className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
    </Link> */}
  </div>
};

export default ProjectsBtn;
