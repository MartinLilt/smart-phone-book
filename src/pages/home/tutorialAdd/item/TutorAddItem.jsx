import { nanoid } from '@reduxjs/toolkit';
import s from './TutorAddItem.module.scss';

import Avatar from 'components/avatar';

export default function TutorialItem({ options }) {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return options.map(contact => {
    return (
      <li key={nanoid()} className={s.tutorial_list}>
        <span className={s.tutorial_box_img}>
          <Avatar firstWord={contact.name} />
        </span>
        <span className={s.tutorial_options}>
          <p className={s.tutorial_name}>
            {capitalizeFirstLetter(contact.name)}
          </p>
          <p className={s.tutorial_number}>{contact.number}</p>
        </span>
      </li>
    );
  });
}
