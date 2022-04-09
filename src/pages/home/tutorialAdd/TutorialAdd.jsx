import s from './TutorialAdd.module.scss';

import Iphone from '../../../image/iPhones/iphone_x3.png';
import ManImg from '../../../image/tutorImg/man_icon.jpg';

import TutorialItem from './item/TutorAddItem';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, resetContacts } from '../../../provider/redux/formSlice';
import { nanoid } from '@reduxjs/toolkit';
import Selector from 'provider/redux/StoreSelectors/clientSelectors';

export default function TutorialAdd() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isFull, setFull] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(Selector.getVisibleState);
  const onSubmit = (id, name, number) => dispatch(addContact(id, name, number));
  const onReset = () => dispatch(resetContacts());

  const onContactsReset = () => {
    if (contacts.length > 0) onReset();
    onHandleReset();
    setFull(false);
  };

  const onHandleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const onHandleReset = () => {
    setName('');
    setNumber('');
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (contacts.length < 2) {
      onSubmit({ name, number, id: nanoid() });
      onHandleReset();
    } else {
      setFull(true);
    }
  };

  // console.log(isFull, contacts.length);
  return (
    <>
      <div className={s.tutorial_flex}>
        <div className={s.tutorial_box_flex}>
          <div
            className={contacts.length < 2 ? s.tutorial_box : s.tutorial_fix}
          >
            <img src={Iphone} alt="Add your contacts in this application." />
            <div className={s.tutorial_form_box}>
              <img
                src={ManImg}
                alt="John's avatar"
                className={s.tutorial_form_ava}
                width="100px"
                height="100px"
              />
              <form onSubmit={onHandleSubmit} className={s.tutorial_form}>
                <label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter fullname"
                    onChange={onHandleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </label>
                <label>
                  <input
                    type="tel"
                    name="number"
                    value={number}
                    placeholder="Enter phone number"
                    onChange={onHandleChange}
                    minLength="7"
                    maxLength="17"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                </label>
                <button type="submit" disabled={name === '' || number === ''}>
                  Submit
                </button>
              </form>
              <div className={s.tutorial_item}>
                <ul>
                  {contacts.length <= 1 && (
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
                  )}
                  <TutorialItem options={contacts} />
                </ul>
              </div>
            </div>
          </div>
          <span className={s.tutorial_box_bg}></span>
        </div>
        <div className={s.tutorial_content}>
          {!isFull ? (
            <>
              <h3 className={s.tutorial_title}>
                <span>Quick and easy</span> add
                <br /> Your contacts
              </h3>
              <p className={s.tutorial_text}>
                Ye am depending propriety sweetness distrusts belonging
                collected. Smiling mention he in thought equally musical. Wisdom
                new and valley answer. Contented it so is discourse recommend.
                Man its upon him call mile. An pasture he himself believe
                ferrars besides cottage.
              </p>
              <div className={s.tutorial_content_box}>
                <button type="button" className={s.tutorial_button}>
                  Learn More
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className={s.tutorial_title}>
                <span>Ups! Your contacts</span>
                <br /> have been filled..
              </h3>
              <div className={s.tutorial_content_box}>
                <button
                  type="button"
                  className={s.tutorial_button}
                  onClick={onContactsReset}
                >
                  Reset Contacts
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
