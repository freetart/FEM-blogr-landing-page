import './Buttons.scss';

const PrimaryButton = ({ text }) => {
  return (
    <a href='#!' className='btn btn-primary'>
      {text}
    </a>
  );
};

const SecondaryButton = ({ text }) => {
  return (
    <a href='#!' className='btn btn-secondary'>
      {text}
    </a>
  );
};

export { PrimaryButton, SecondaryButton };
