// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image src={'./avatar.png'} width={100} height={250} alt='' className='translate-z-0 w-full h-full mix-blend-color-dodge'/>
    </div>
  );
};

export default Avatar;
