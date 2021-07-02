import './Sidebar.scss';
import logo from '../images/logo.svg';
import NavLink from '../components/NavLink/NavLink';

const Sidebar = ({ isActive }) => {
  if (isActive) {
    return (
      <aside className='sidebar'>
        <div className='sidebar-content'>
          <img src={logo} alt='blogr logo' className='sidebar-logo' />
          <div className='sidebar-links'>
            <NavLink text='Product' />
            <NavLink text='Company' />
            <NavLink text='Connect' />
          </div>
        </div>
      </aside>
    );
  } else {
    return null;
  }
};

export default Sidebar;
