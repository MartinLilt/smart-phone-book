import s from './TestimonialsItem.module.scss';
import Testimonials from '../testimonials.json';
import ManImg from 'image/tutorImg/man_icon.jpg';
import Avatar from '@mui/material/Avatar';

const TestimonialsItem = () => {
  return Testimonials.map((item, id) => {
    return (
      <li key={id} className={s.list}>
        <p className={s.comment}>{item.comment}</p>
        <div className={s.flex}>
          <Avatar
            className={s.avatar}
            alt="John's avatar"
            src={ManImg}
            sx={{ width: 60, height: 60 }}
          />
          <span>
            <p className="example_cards_name">{item.user}</p>
            <p className="example_cards_number">{item.job}</p>
          </span>
        </div>
      </li>
    );
  });
};

export default TestimonialsItem;
