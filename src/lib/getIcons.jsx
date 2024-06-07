import { IoPeopleCircle } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { BsAspectRatioFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { HiRectangleStack } from 'react-icons/hi2';
import { SiElasticstack } from 'react-icons/si';
import { AiFillDatabase } from 'react-icons/ai';

export const getIcons = (icon) => {
  switch (icon) {
    case 'IoPeopleCircle':
      return <IoPeopleCircle size='48' className='text-slate-500' />;
    case 'ImBooks':
      return <ImBooks size='48' className='text-slate-500' />;
    case 'BsAspectRatioFill':
      return <BsAspectRatioFill size='48' className='text-slate-500 ' />;
    case 'FaLaptopCode':
      return <FaLaptopCode size='48' className='text-slate-500' />;
    case 'HiRectangleStack':
      return <HiRectangleStack size='48' className='text-slate-500' />;
    case 'SiElasticstack':
      return <SiElasticstack size='48' className='text-slate-500' />;
    case 'AiFillDatabase':
      return <AiFillDatabase size='48' className='text-slate-500' />;
    default:
      return null;
  }
};
