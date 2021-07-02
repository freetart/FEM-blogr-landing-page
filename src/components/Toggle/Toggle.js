import { FaBars, FaTimes } from 'react-icons/fa';
import './Toggle.scss';

const Toggle = ({ isActive, setIsActive }) => {
  return (
    <button className='toggle' onClick={() => setIsActive(!isActive)}>
      {!isActive ? (
        <FaBars className='toggle-icon' />
      ) : (
        <FaTimes
          className='toggle-icon'
          style={{ position: 'fixed', right: '2rem', top: '5rem' }}
        />
      )}
    </button>
  );
};

export default Toggle;
