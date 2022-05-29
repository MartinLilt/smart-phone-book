import s from './Testimonials.module.scss';
import TutorialItem from './item';

export default function Testimonials() {
  return (
    <div>
      <h4 className={s.testimonials_title}>Testimonials</h4>
      <p className={s.testimonials_text}>
        Wisdom new and valley answer. Contented it so is discourse recommend.
        Man its upon him call mile. An pasture he himself believe ferrars
        besides cottage.
      </p>
      <ul className={s.testimonials_flex}>
        <TutorialItem />
      </ul>
    </div>
  );
}
