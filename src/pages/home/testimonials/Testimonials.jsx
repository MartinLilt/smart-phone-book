import s from './Testimonials.module.scss';
import TutorialItem from './item';

export default function Testimonials() {
  return (
    <div>
      <h4 className={s.title}>Testimonials</h4>
      <p className={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
        officia odit reprehenderit veniam perferendis omnis debitis ullam?
      </p>
      <ul className={s.flex}>
        <TutorialItem />
      </ul>
    </div>
  );
}
