import { FaBars, FaTimes } from 'react-icons/fa';
import './Toggle.scss';

const Toggle = ({ isActive, setIsActive }) => {
  return (
    <button className='toggle' onClick={() => setIsActive(!isActive)}>
      {!isActive ? (
        <FaBars className='toggle-icon' />
      ) : (
        <FaTimes className='toggle-icon' />
      )}
    </button>
  );
};

export default Toggle;
