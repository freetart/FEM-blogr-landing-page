import './Navbar.scss';
import logo from '../../images/logo.svg';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import NavLink from '../NavLink/NavLink';
import Toggle from '../Toggle/Toggle';

const Navbar = ({ isActive, setIsActive }) => {
  return (
    <nav className='nav'>
      <div className='nav-content'>
        <div className='nav-logo-links'>
          <img src={logo} alt='blogr logo' className='nav-logo' />
          <ul className='nav-list'>
            <NavLink text='Product' />
            <NavLink text='Company' />
            <NavLink text='Connect' />
          </ul>
        </div>
        <div className='nav-signup-login'>
          <SecondaryButton text='Login' />
          <PrimaryButton text='Sign Up' />
        </div>
        <Toggle
          className='toggle'
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
