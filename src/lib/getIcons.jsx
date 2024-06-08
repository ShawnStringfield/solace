import { IoPeopleCircle } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { BsAspectRatioFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { HiRectangleStack } from 'react-icons/hi2';
import { SiElasticstack } from 'react-icons/si';
import { AiFillDatabase } from 'react-icons/ai';

export const getIcons = (icon, size) => {
  switch (icon) {
    case 'IoPeopleCircle':
      return <IoPeopleCircle size={size} />;
    case 'ImBooks':
      return <ImBooks size={size} />;
    case 'BsAspectRatioFill':
      return <BsAspectRatioFill size={size} />;
    case 'FaLaptopCode':
      return <FaLaptopCode size={size} />;
    case 'HiRectangleStack':
      return <HiRectangleStack size={size} />;
    case 'SiElasticstack':
      return <SiElasticstack size={size} />;
    case 'AiFillDatabase':
      return <AiFillDatabase size={size} />;
    default:
      return null;
  }
};
