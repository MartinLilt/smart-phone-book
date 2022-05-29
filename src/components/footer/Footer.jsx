import s from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={s.flex}>
        <div>
          <p className={s.title}>smartHome</p>
          <p className={s.text}>
            Automate your entire healthcare hiring, onboarding and compliance
            with a true technology platform.
          </p>
          <button type="button" className={s.button}>
            Register now!
          </button>
          <button type="button" className={s.button}>
            Sign in
          </button>
        </div>
        <div>
          <p>CATEGORIES</p>
          <ul>
            <li>Product Management</li>
            <li>Design / Creatives</li>
            <li>Education & Training</li>
            <li>UI/UX Designers</li>
            <li>Development</li>
            <li>Customer Support</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
