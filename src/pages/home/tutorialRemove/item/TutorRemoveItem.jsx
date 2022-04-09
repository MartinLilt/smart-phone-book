import Avatar from 'components/avatar';
import randomSubHelper from 'helpers/contactStub/contactStubHelper';
import { RiChatDeleteFill } from 'react-icons/ri';
import { removeContact } from 'provider/redux/formSlice';
import { useDispatch } from 'react-redux';
import s from './TutorRemoveItem.module.scss';

export default function TutorialItem({ options }) {
  const dispatch = useDispatch();

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return options.map((contact, id) => {
    const randomizer = randomSubHelper();
    return (
      <li key={id} className={s.tutorial_list}>
        {console.log(contact.id)}
        <button
          id={id}
          type="button"
          className={s.tutorial_button}
          onClick={() => dispatch(removeContact(contact.id))}
        >
          <RiChatDeleteFill className={s.tutorial_button_icon} />
        </button>
        <div className={s.tutorial_list_flex}>
          <span className={s.tutorial_box_img}>
            <Avatar firstWord={contact.name} />
          </span>
          <span className={s.tutorial_options}>
            <p className={s.tutorial_name} name="name">
              {capitalizeFirstLetter(contact.name)}
            </p>
            <p className={s.tutorial_number} number="number">
              {contact.number}
            </p>
          </span>
        </div>
        <div className={s.tutorial_stub}>{randomizer}</div>
      </li>
    );
  });
}
