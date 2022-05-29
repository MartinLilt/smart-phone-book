import s from './DownloadApp.module.scss';
import Iphone from 'image/iPhones/iphone_x3.png';
import DownloadButt from 'components/downloadButt';

const DownloadApp = () => {
  return (
    <>
      <div className={s.flex}>
        <div className={s.text}>
          <h4 className="title">Download App</h4>
          <p className="title_text">
            Wisdom new and valley answer. Contented it so is discourse
            recommend. Man its upon him call mile. An pasture he himself believe
            ferrars besides cottage.
          </p>
          <DownloadButt />
        </div>
        <div className={s.box}>
          <img src={Iphone} alt="Smart phonebook offer to download app" />
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
