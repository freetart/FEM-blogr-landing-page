import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import './Header.scss';

const Header = ({ isActive, setIsActive }) => {
  return (
    <header className='header'>
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <Hero />
    </header>
  );
};

export default Header;
