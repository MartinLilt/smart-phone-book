import s from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  return (
    <>
      <div className={s.header_flex}>
        <ul className={s.header_list}>
          <li>
            <button type="button" className={s.header_button}>
              Virtual numbers
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Toll free numbers
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Sip trunk
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Phone systems
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Coverage
            </button>
          </li>
          <li>
            <button type="button" className={s.header_button}>
              Pricing
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
