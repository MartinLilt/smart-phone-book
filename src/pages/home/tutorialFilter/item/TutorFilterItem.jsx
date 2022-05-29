import Avatar from 'components/avatar';
import { nanoid } from '@reduxjs/toolkit';
import Selector from 'provider/redux/StoreSelectors/clientSelectors';
import { useSelector } from 'react-redux';
import FilterColorizer from 'helpers/ContactsFilterHelper/contactsFilterStyler';
import s from './TutorFilterItem.module.scss';

export default function TutorialItem({ placeholder, typeContact, typeNumber }) {
  const options = useSelector(Selector.getFilteredOptions);
  const filter = useSelector(Selector.getFilter);
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return options.map((contact, id) => {
    const name = capitalizeFirstLetter(contact.name);
    return (
      <li key={nanoid()} className={s.tutorial_list}>
        <span className={s.tutorial_box_img}>
          <Avatar firstWord={contact.name} />
        </span>
        <span className={s.tutorial_options} tofindaccent="tofindaccent">
          <p
            className={
              placeholder === typeContact.current
                ? 'item_cards_name'
                : 'item_cards_number'
            }
          >
            {!filter ? name : FilterColorizer(name, filter)}
          </p>
          <p
            className={
              placeholder === typeContact.current
                ? 'item_cards_number'
                : 'item_cards_name'
            }
          >
            {contact.number}
          </p>
        </span>
      </li>
    );
  });
}
