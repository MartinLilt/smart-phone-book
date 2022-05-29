import s from './TutorialRemove.module.scss';

import Iphone from '../../../image/iPhones/iphone_x3.png';
import ManImg from '../../../image/tutorImg/man_icon.jpg';

import TutorialItem from './item/TutorRemoveItem';

import { useSelector } from 'react-redux';
import Selector from 'provider/redux/StoreSelectors/clientSelectors';

export default function TutorialRemove() {
  const contacts = useSelector(Selector.getVisibleState);
  console.log('remove ==>', contacts);
  return (
    <>
      <div className={s.tutorial_flex}>
        <div className={s.tutorial_content}>
          <>
            <h3 className={s.tutorial_title}>
              <span>Automatically</span> remove
              <br /> Your contacts..
            </h3>
            <p className={s.tutorial_text}>
              Ye am depending propriety sweetness distrusts belonging collected.
              Smiling mention he in thought equally musical. Wisdom new and
              valley answer. Contented it so is discourse recommend. Man its
              upon him call mile. An pasture he himself believe ferrars besides
              cottage.
            </p>
            <div className={s.tutorial_content_box}>
              <button type="button" className={s.tutorial_button}>
                Learn More
              </button>
            </div>
          </>
        </div>
        <div className={s.tutorial_box_flex}>
          <div
            className={
              contacts.length < 1 ? s.tutorial_box : s.tutorial_box_fix
            }
          >
            <img src={Iphone} alt="Add your contacts in this application." />
            <div className={s.tutorial_form_box}>
              <div className={s.tutorial_item}>
                <ul>
                  <TutorialItem
                    options={contacts}
                    functionType={'TutorialRemove'}
                  />
                  <li
                    className={
                      contacts.length < 2
                        ? s.tutorial_list
                        : s.tutorial_list_fix
                    }
                  >
                    <div className={s.tutorial_list_flex}>
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
                        <p className="example_cards_name">John M.</p>
                        <p className="example_cards_number">+14445552223</p>
                      </span>
                    </div>
                    <div className={s.tutorial_xx}>
                      <p>
                        xxxxxxx <b>xxxxxxx</b> xxxxxx xxxxxxx-xxx xx*******xxxxx
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className={s.tutorial_box_bg}></span>
        </div>
      </div>
    </>
  );
}
