import s from './Faqs.module.scss';
import FaqsItem from './item';

export default function Faqs() {
  return (
    <div>
      <h4 className={s.faqs_title}>FAQ’s</h4>
      <div className={s.absorber}>
        <ul className={s.faqs}>
          <FaqsItem />
        </ul>
      </div>
    </div>
  );
}
