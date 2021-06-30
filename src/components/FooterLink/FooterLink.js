import './FooterLink.scss';

const FooterLink = ({ text }) => {
  return (
    <li className='footer-item'>
      <a href='#!' className='footer-link'>
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
