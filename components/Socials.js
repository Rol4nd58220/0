// links
import Link from 'next/link';

// icons
import {
  RiFacebookBoxLine, 
  RiInstagramLine, 
  RiPinterestLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/RolandMorzo/' } className='hover:text-accent transition-all duration-300' target='_blank'> 
        <RiFacebookBoxLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
