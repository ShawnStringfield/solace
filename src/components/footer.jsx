import { Link } from 'react-router-dom';
import { navLinks } from '../config/navLinks';
export const Footer = () => {
  return (
    <footer className='flex justify-center py-8'>
      <ul className='flex space-x-4'>
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
