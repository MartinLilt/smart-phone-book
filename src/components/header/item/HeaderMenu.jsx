import s from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  return (
    <>
      <div className={s.header_flex}>
        <ul className={s.header_list}>
          <li>
            <button type="button" className={s.header_button}>
              Tutor me
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Our clients
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Testimonials
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              FAQ’s
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Download App
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Subscribe
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
