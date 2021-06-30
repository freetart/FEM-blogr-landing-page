import './Footer.scss';
import logo from '../../images/logo.svg';
import FooterLink from '../FooterLink/FooterLink';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <img src={logo} alt='blogr logo' className='footer-logo' />
        <div className='footer-col'>
          <h3 className='footer-heading'>Product</h3>
          <ul className='footer-list'>
            <FooterLink text={'Overview'} />
            <FooterLink text={'Pricing'} />
            <FooterLink text={'Marketplace'} />
            <FooterLink text={'Features'} />
            <FooterLink text={'Integrations'} />
          </ul>
        </div>
        <div className='footer-col'>
          <h3 className='footer-heading'>Company</h3>
          <ul className='footer-list'>
            <FooterLink text={'About'} />
            <FooterLink text={'Team'} />
            <FooterLink text={'Blog'} />
            <FooterLink text={'Careers'} />
          </ul>
        </div>
        <div className='footer-col'>
          <h3 className='footer-heading'>Connect</h3>
          <ul className='footer-list'>
            <FooterLink text={'Contact'} />
            <FooterLink text={'Newsletter'} />
            <FooterLink text={'Linkedin'} />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
