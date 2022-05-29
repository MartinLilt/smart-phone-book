import s from './DownloadButt.module.scss';

import GoogleMarketImg from 'image/appStores/googleplay.png';
import AppleStoreImg from 'image/appStores/appstore.png';

const DownloadButt = () => {
  return (
    <>
      <ul className={s.store}>
        <li>
          <a href="">
            <img src={GoogleMarketImg} alt="Play market" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={AppleStoreImg} alt="Play market" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default DownloadButt;
