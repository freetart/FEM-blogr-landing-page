import './Hero.scss';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1 className='hero-heading' data-aos='fade-up'>
          A modern publishing platform
        </h1>
        <p className='hero-desc' data-aos='fade-up' data-aos-delay='100'>
          Grow your audience and build your online brand
        </p>
        <div className='hero-btns' data-aos='fade-up' data-aos-delay='200'>
          <PrimaryButton text='Start for Free' />
          <SecondaryButton text='Learn More' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
