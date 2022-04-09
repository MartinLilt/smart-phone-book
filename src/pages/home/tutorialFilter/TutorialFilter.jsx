import s from './TutorialFilter.module.scss';

import Iphone from '../../../image/iPhones/iphone_x3.png';
import ManImg from '../../../image/tutorImg/man_icon.jpg';

import Avatar from '@mui/material/Avatar';
import TutorialItem from './item/TutorFilterItem';
import { AiOutlineNumber } from 'react-icons/ai';
import { RiAccountPinCircleFill } from 'react-icons/ri';

import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Selector from '../../../provider/redux/StoreSelectors/clientSelectors';
import { filterContact } from '../../../provider/redux/formSlice';

export default function TutorialFilter() {
  const dispatch = useDispatch();
  const findContact = useRef('Find contact..');
  const findNumber = useRef('Find number..');
  const [placeholder, setPlaceholder] = useState(findContact.current);
  const contacts = useSelector(Selector.getOptionsState);
  const onChange = query => dispatch(filterContact(query));

  const onHandleChange = e => {
    const { value } = e.currentTarget;
    onChange(value);
  };

  const onHandleClear = e => {
    e.preventDefault();
    if (placeholder === findContact.current) setPlaceholder(findNumber.current);
    if (placeholder === findNumber.current) setPlaceholder(findContact.current);
  };
  console.log('contacts', contacts);
  return (
    <>
      {console.log('render')}
      <div className={s.tutorial_flex}>
        <div className={s.tutorial_box_flex}>
          <div
            className={contacts.length < 2 ? s.tutorial_box : s.tutorial_fix}
          >
            <img src={Iphone} alt="Add your contacts in this application." />
            <div className={s.tutorial_form_box}>
              <form className={s.tutorial_form}>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder={placeholder}
                    autoComplete="off"
                    onChange={onHandleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </label>
                <button type="button" onClick={onHandleClear}>
                  {placeholder === findNumber.current ? (
                    <AiOutlineNumber className={s.tutorial_button_icon} />
                  ) : (
                    <RiAccountPinCircleFill
                      className={s.tutorial_button_icon}
                    />
                  )}
                </button>
              </form>
              <div className={s.tutorial_item}>
                <ul>
                  <li
                    className={
                      contacts.length < 2
                        ? s.tutorial_list
                        : s.tutorial_list_fix
                    }
                  >
                    <span className={s.tutorial_box_img}>
                      <img
                        src={ManImg}
                        alt="John's avatar"
                        className={s.tutorial_form_ava}
                        width="60px"
                        height="60px"
                      />
                    </span>
                    <span className={s.tutorial_options}>
                      <p className={s.tutorial_name}>John M.</p>
                      <p className={s.tutorial_number}>+14445552223</p>
                    </span>
                  </li>
                  <TutorialItem
                    placeholder={placeholder}
                    typeContact={findContact}
                    typeNumber={findNumber}
                  />
                </ul>
              </div>
            </div>
          </div>
          <span className={s.tutorial_box_bg}></span>
        </div>
        <div className={s.tutorial_content}>
          <h3 className={s.tutorial_title}>
            <span>Filter your contacts</span>
            <br /> With one click
          </h3>
          <p className={s.tutorial_text}>
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him
            call mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <div className={s.tutorial_content_box}>
            <button type="button" className={s.tutorial_button}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
