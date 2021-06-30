import './NavLink.scss';
import { GoChevronDown } from 'react-icons/go';

const NavLink = ({ text }) => {
  return (
    <li className='nav-item'>
      <a href='#!' className='nav-link'>
        {text}
        <GoChevronDown />
      </a>
    </li>
  );
};

export default NavLink;
