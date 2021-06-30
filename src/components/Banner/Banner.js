import './Banner.scss';
import bannerImg from '../../images/illustration-phones.svg';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner-content'>
        <img
          src={bannerImg}
          alt='illustration of phones with blogr app'
          className='banner-img'
        />
        <div className='banner-info'>
          <h2 className='banner-heading'>State of the Art Infrastructure</h2>
          <p className='banner-desc'>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
