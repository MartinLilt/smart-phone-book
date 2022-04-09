import s from './HeroOffer.module.scss';
import { HashLink as Link } from 'react-router-hash-link';

// This is images =>
import GoogleMarketImg from 'image/appStores/googleplay.png';
import AppleStoreImg from 'image/appStores/appstore.png';
import Iphone from 'image/iPhones/iphone_x3.png';

// This is icons =>
import { BsArrowDown } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

export default function HeroOffer() {
  return (
    <>
      <div className={s.offer_position}>
        <div className={s.offer_flex}>
          <div className={s.offer_justify_content}>
            <span>
              <ul className={s.offer_ul}>
                <li className={s.offer_social}>
                  <a href="#" className={s.offer_link}>
                    <FaFacebookF className={s.offer_link_icon} />
                  </a>
                </li>
                <li className={s.offer_social}>
                  <a href="#" className={s.offer_link}>
                    <RiInstagramLine className={s.offer_link_icon} />
                  </a>
                </li>
                <li className={s.offer_social}>
                  <a href="#" className={s.offer_link}>
                    <AiFillGithub className={s.offer_link_icon} />
                  </a>
                </li>
                <li className={s.offer_social}>
                  <a href="#" className={s.offer_link}>
                    <GrLinkedinOption className={s.offer_link_icon} />
                  </a>
                </li>
              </ul>
            </span>
            <div className={s.offer_position}>
              <ul className={s.offer_list}>
                <li className={s.offer_li}>
                  <img
                    src={Iphone}
                    alt="Add your contacts in this application."
                  />
                </li>
                <li className={s.offer_li}>
                  <img
                    src={Iphone}
                    alt="Add your contacts in this application."
                  />
                </li>
                <li className={s.offer_li}>
                  <img
                    src={Iphone}
                    alt="Add your contacts in this application."
                  />
                </li>
              </ul>
            </div>
            <Link to="/pathLink#tutor" className={s.offer_button_position}>
              <button type="button" className={s.offer_button}>
                <BsArrowDown className={s.offer_button_icon} />
              </button>
            </Link>
          </div>
          <div>
            <ul className={s.offer_store}>
              <li className={s.offer_store_li}>
                <a href="">
                  <img src={GoogleMarketImg} alt="Play market" />
                </a>
              </li>
              <li className={s.offer_store_li}>
                <a href="">
                  <img src={AppleStoreImg} alt="Play market" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
